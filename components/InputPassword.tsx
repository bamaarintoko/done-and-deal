interface InputPasswordProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPassword({ value = "", onChange = () => { } }: InputPasswordProps) {
    return (
        <input
            type="password"
            className="w-full p-2 mb-6 border border-gray-300 rounded"
            value={value}
            onChange={onChange}
            required
        />
    )
}