interface RegularInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function RegularInput({ value = "", onChange = () => { } }: RegularInputProps) {
    return (
        <input
            type="text"
            className="w-full p-2 mb-6 border border-gray-300 rounded"
            value={value}
            onChange={onChange}
            required
        />
    )
}