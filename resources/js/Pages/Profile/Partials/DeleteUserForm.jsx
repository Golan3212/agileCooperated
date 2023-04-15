import { useRef, useState } from 'react';
import DangerButton from '@/Components/mark/DangerButton';
import InputError from '@/Components/mark/InputError';
import InputLabel from '@/Components/mark/InputLabel';
import Modal from '@/Components/mark/Modal';
import SecondaryButton from '@/Components/mark/SecondaryButton';
import TextInput from '@/Components/mark/TextInput';
import { useForm } from '@inertiajs/react';


export default function DeleteUserForm({ className = ''}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Удалить Аккаунт</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Как только ваша учетная запись будет удалена, все ее ресурсы и данные будут удалены безвозвратно.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>Удалить!</DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Вы уверены, что хотите удалить свою учетную запись?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                      Пожалуйста
                        введите свой пароль, чтобы подтвердить, что вы хотите окончательно удалить свою учетную запись.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Пароль"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Отмена</SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                         Удалить
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
