export const Heading = (props) => {
	const Element = props.element
	return (
		<Element className={`text-${props.textSize} font-bold pb-2 ${props.className}`}>
			{props.children}
		</Element>
	)
}

export const H1 = (props) => <Heading element="h1" textSize="2xl" {...props} />
export const H2 = (props) => <Heading element="h2" textSize="xl" {...props} />
export const H3 = (props) => <Heading element="h3" textSize="lg" {...props} />
export const H4 = (props) => <Heading element="h4" textSize="md" {...props} />

export default H1