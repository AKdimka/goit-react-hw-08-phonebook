import { SectionQ, Title } from "./Section.styled"

export const Section = ({ title, children }) => {
	return (
		<SectionQ>
			<Title>{title}</Title>
			{children}
		</SectionQ >
	)
}