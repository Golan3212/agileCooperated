import { useEffect } from 'react';
import Checkbox from '../../../Components/mark/Checkbox';
import GuestLayout from '../../../Layouts/GuestLayout';
import InputError from '../../../Components/mark/InputError';
import InputLabel from '../../../Components/mark/InputLabel';
import PrimaryButton from '../../../Components/mark/PrimaryButton';
import TextInput from '../../../Components/mark/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import "../../../../css/account.css";
import "../../../../css/recipe.css";


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        Inertia.post('/login', data);
    };

    return (
        <>
            <Head title="Log in" />
            <div className="account">

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form  className="account__box"onSubmit={submit}>
                    <div className="account__inner">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full login__input"
                            autoComplete="username"
                            isFocused={true}
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="account__inner">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full login__input"
                            autoComplete="current-password"
                            onChange={handleOnChange}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center  login__box">
                            <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                            <span className="ml-2 text-sm text-gray-600">Запомнить меня</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4 login__inner">
                        {canResetPassword && (
                            <InertiaLink
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                            >
                                Забыли свой пароль?
                            </InertiaLink>
                        )}

                        <PrimaryButton className="ml-4 account__btn login__button" disabled={processing}>
                            войти
                        </PrimaryButton>
                    </div>
                </form>

            </div>
        </>
    );
}
