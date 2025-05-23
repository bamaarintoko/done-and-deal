interface InputEmailProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputEmail({ value = "", onChange = () => { } }: InputEmailProps) {
    return (
        <input
            type="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={value}
            onChange={onChange}
            required
        />
    )
}