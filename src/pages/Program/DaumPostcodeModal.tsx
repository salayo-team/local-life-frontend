// src/pages/Program/DaumPostcodeModal.tsx
import React, { useEffect } from 'react';
import * as S from './DaumPostcodeModal.styled';

interface DaumPostcodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (addressData: {
    roadAddress: string;
    jibunAddress: string;
    zonecode: string;
  }) => void;
}

declare global {
  interface Window {
    daum: any;
  }
}

const DaumPostcodeModal: React.FC<DaumPostcodeModalProps> = ({
                                                               isOpen,
                                                               onClose,
                                                               onComplete,
                                                             }) => {
  useEffect(() => {
    if (isOpen) {
      loadDaumPostcodeScript();
    }
  }, [isOpen]);

  const loadDaumPostcodeScript = () => {
    if (window.daum) {
      openDaumPostcode();
      return;
    }

    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.onload = () => {
      openDaumPostcode();
    };
    document.head.appendChild(script);
  };

  const openDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        onComplete({
          roadAddress: data.roadAddress,
          jibunAddress: data.jibunAddress,
          zonecode: data.zonecode,
        });
        onClose();
      },
      onclose: () => {
        onClose();
      },
      width: '100%',
      height: '100%',
    }).embed(document.getElementById('postcode-container'));
  };

  if (!isOpen) return null;

  return (
      <S.Overlay>
        <S.ModalSection>
          <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
          <S.PostcodeContainer id="postcode-container" />
        </S.ModalSection>
      </S.Overlay>
  );
};

export default DaumPostcodeModal;
