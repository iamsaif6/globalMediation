export default function Professional({ fill = '#fff', className = 'h-5 w-5' }) {
  return (
    <svg className={className} width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer frame (represents structure & reliability) */}
      <rect x="5.5" y="5.5" width="50" height="49" rx="6" stroke={fill} strokeWidth="1.3" fill="none" />

      {/* Inner columns (symbolizing professionalism, order, and growth) */}
      <rect x="14" y="20" width="3" height="20" rx="2" fill={fill} opacity="0.9" />
      <rect x="27.5" y="15" width="3" height="25" rx="2" fill={fill} opacity="0.9" />
      <rect x="41" y="25" width="3" height="15" rx="2" fill={fill} opacity="0.9" />

      {/* Line base for stability */}
      <rect x="12" y="43" width="37" height="2" rx="1" fill={fill} opacity="0.8" />
    </svg>
  );
}
