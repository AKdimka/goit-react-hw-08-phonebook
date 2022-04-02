export const Section = ({ title, children }) => {
	return (
		<div className="section">
			<h1 className="title">{title}</h1>
			{children}
		</div >
	)
}