import ModalLayout from '@/components/modal/modalLayout';
import ProfileModalForm from '@/components/modal/profile/profileModalForm';
import { Member } from '@/types/api/member';

interface ProfileModalProps {
  onClick: () => void;
  profileData: Member;
}

function ProfileModal({ onClick, profileData }: ProfileModalProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ProfileModalForm
        onClick={onClick}
        profileImage={profileData.profileImage}
        email={profileData.email}
        nickname={profileData.nickname}
      />
    </ModalLayout>
  );
}

export default ProfileModal;
