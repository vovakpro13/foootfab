interface FilterProps {
  label: string;
  options: (string | number)[];
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter: React.FC<FilterProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>

      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={label}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.207 6.799a.497.497 0 0 1 .691-.001l4.609 4.601 4.569-4.569a.493.493 0 0 1 .709 0 .499.499 0 0 1 0 .707l-4.914 4.914a.497.497 0 0 1-.71 0l-4.954-4.952a.499.499 0 0 1-.001-.699z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Filter;
