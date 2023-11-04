import { Modal } from "@/components"
import { UpdateUserInput, User } from "@/types"
import { FC, useState } from "react"

type UserDetailsModalProps = {
  isOpen: boolean
  user: User
  setUser: (user: UpdateUserInput) => void
  onClose: () => void
}

export const UserDetailsModal: FC<UserDetailsModalProps> = ({
  isOpen, user, setUser, onClose,
}) => {
  const [newUser, setNewUser] = useState<User>(user);

  const onCancel = () => {
    setNewUser(user);
    onClose();
  };

  const onChange = (property: keyof User) => (e: any) => {
    e.preventDefault();

    setNewUser({ ...newUser, [property]: e.target.value });
  };

  const onSubmit = () => {
    setUser({
      firstName: newUser.firstName,
      lastName: newUser.lastName
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onCancel={onCancel} onSubmit={onSubmit} title="Update user details">
      <div className="width-full flex justify-between py-4">
        <div className="w-5/12 m-4">
          <p className="text-lg">First name</p>
          <input value={newUser.firstName} onChange={onChange('firstName')} />
        </div>
        <div className="w-5/12 m-4">
          <p className="text-lg">Last name</p>
          <input value={newUser.lastName} onChange={onChange('lastName')} />
        </div>
      </div>
    </Modal>
  );
};