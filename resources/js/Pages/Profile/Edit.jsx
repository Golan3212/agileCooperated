import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, user, status }) {
    return (
        <
        >
            <Head title="Profile" />

            <div className="info__box">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 info__mobil">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg info__inner">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            user={user}
                            status={status}
                            className="info__inner"

                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg info__inner">
                        <UpdatePasswordForm className="info__inner"/>
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg info__inner">
                        <DeleteUserForm  className="info__inner"/>
                    </div>
                </div>
            </div>
        </>
    );
}
