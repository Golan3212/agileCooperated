export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-red-900 ' + className}>
            {message}
        </p>
    ) : null;
}
