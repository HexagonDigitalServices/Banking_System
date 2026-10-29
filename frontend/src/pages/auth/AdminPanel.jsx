const AnimInput = ({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  rightEl,
  required,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`${s.inputWrapperBase} ${
        focused ? s.inputWrapperFocusedExtras : s.inputWrapperUnfocusedExtras
      }`}
    >
      {Icon && (
        <Icon
          size={16}
          className={`${s.iconBase} ${
            focused ? s.iconColorFocused : s.iconColorUnfocused
          }`}
        />
      )}
      <input
        type={type}
        className={s.inputField}
        placeholder={focused ? "" : placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
      />
      {rightEl}
    </div>
  );
};

function useRipple() {
  const [ripples, setRipples] = useState([]);
  const addRipple = (e) => {
    const btn = e.currentTarget.getBoundingClientRect();
    const size = Math.max(btn.width, btn.height) * 2;
    const x = e.clientX - btn.left - size / 2;
    const y = e.clientY - btn.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rr) => rr.id !== id)), 650);
  };
  return { ripples, addRipple };
}

const RippleButton = ({ children, disabled, className, type = "button" }) => {
  const { ripples, addRipple } = useRipple();
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${s.rippleButtonBase} ${className}`}
      onClick={addRipple}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
          className={s.ripple}
        />
      ))}
      {children}
    </button>
  );
};