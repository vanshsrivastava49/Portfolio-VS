type TFloatingBtn = {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
	newTab:boolean;
};
export const FloatingButton = ({ label, className, href,newTab }: TFloatingBtn) => {
	return (
		<a
			href={href}
			className={`floating-btn ${className}`}
			{...(newTab ? { target: '_blank'} : {})}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};
