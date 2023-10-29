import React, { useRef } from 'react'

// framer motion examples library
import { motion, useScroll, useTransform } from 'framer-motion'

const Section = ({ children, ...rest }) => {
	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: [ "end start"],
	})

	const backgroundY = useTransform(scrollYProgress, [0, 2], ['0%', '100%']);
	return (
		<motion.section
			{...rest} ref={ref}
			style={{ y: backgroundY }}>
			{children}
		</motion.section>
	)
}

export default Section