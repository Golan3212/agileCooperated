import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/mark/InputError';
import InputLabel from '@/Components/mark/InputLabel';
import PrimaryButton from '@/Components/mark/PrimaryButton';
import TextInput from '@/Components/mark/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import "../../../../css/account.css";
import "../../../../css/recipe.css"

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    console.log(data);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        Inertia.post(route('register'), data);
    };

    return (
        <>
            <Head title="Register" />
            <div className="account">
                <form className="account__box" onSubmit={submit}>
                    {/* <h2>Персональные данные</h2> */}
                    <div className="account__inner">
                        <InputLabel htmlFor="name" value="Имя" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="input_name login__input"
                            autoComplete="name"
                            isFocused={true}
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="account__inner">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full login__input"
                            autoComplete="username"
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    {/* <div className="account__inner">
                        <InputLabel htmlFor="phone" value="Телефон"/>

                        <TextInput
                            id="phone"
                            name="phone"
                            value={data.phone}
                            className="input_name"
                            autoComplete="phone"
                            isFocused={true}
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div> */}

                    <div className="account__inner">
                        <InputLabel htmlFor="password" value="Пароль" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full login__input"
                            autoComplete="new-password"
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="account__inner">
                        <InputLabel htmlFor="password_confirmation" value="Подтверждение пароля" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full login__input"
                            autoComplete="new-password"
                            onChange={handleOnChange}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4 login__inner">
                        <InertiaLink
                            href='/login'
                            className="underline text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Вы зарегистрированы?
                        </InertiaLink>

                        <PrimaryButton className="ml-4 account__btn login__button" disabled={processing}>
                            Зарегистрироваться
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </>
    );
}
