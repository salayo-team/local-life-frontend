// src/pages/Program/CreateProgram.tsx
import React, { useState } from 'react';
import DaumPostcodeModal from './DaumPostcodeModal';
import * as S from './CreateProgram.styled';

interface AddressData {
  roadAddress: string;
  jibunAddress: string;
  zonecode: string;
}

const CreateProgram: React.FC = () => {
  const [isPostcodeModalOpen, setIsPostcodeModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<AddressData | null>(null);
  const [detailAddress, setDetailAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddressSearch = () => {
    setIsPostcodeModalOpen(true);
  };

  const handleAddressComplete = (addressData: AddressData) => {
    setSelectedAddress(addressData);
    setIsPostcodeModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsPostcodeModalOpen(false);
  };

  const formatAddress = (addressData: AddressData, detail: string) => {
    const { roadAddress, jibunAddress, zonecode } = addressData;
    return `${roadAddress} (${jibunAddress}), ${detail} [${zonecode}]`;
  };

  const handleSubmit = async () => {
    if (!selectedAddress || !detailAddress.trim()) {
      alert('주소를 선택하고 상세주소를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const fullAddress = formatAddress(selectedAddress, detailAddress);

      const formData = new FormData();
      formData.append('location', fullAddress);

      const response = await fetch('/programs', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('프로그램이 성공적으로 생성되었습니다.');
        setSelectedAddress(null);
        setDetailAddress('');
      } else {
        throw new Error('프로그램 생성에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error creating program:', error);
      alert('프로그램 생성 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <S.Container>
        <S.Title>프로그램 생성</S.Title>

        <S.AddressSection>
          <S.Button type="button" onClick={handleAddressSearch}>
            주소 검색
          </S.Button>

          {selectedAddress && (
              <S.SelectedAddress>
                <S.DetailInput
                    type="text"
                    required
                    value={detailAddress}
                    onChange={(e) => setDetailAddress(e.target.value)}
                    placeholder="상세주소를 입력하세요"
                />

                <S.PreviewTitle>최종 주소</S.PreviewTitle>
                <S.FinalAddress>
                  {formatAddress(selectedAddress, detailAddress || '상세주소')}
                </S.FinalAddress>
              </S.SelectedAddress>
          )}
        </S.AddressSection>

        <S.SubmitSection>
          <S.Button
              onClick={handleSubmit}
              disabled={!selectedAddress || !detailAddress.trim() || isSubmitting}
          >
            {isSubmitting ? '생성 중...' : '프로그램 생성'}
          </S.Button>
        </S.SubmitSection>

        <DaumPostcodeModal
            isOpen={isPostcodeModalOpen}
            onClose={handleCloseModal}
            onComplete={handleAddressComplete}
        />
      </S.Container>
  );
};

export default CreateProgram;
