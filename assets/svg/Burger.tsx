import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

function Burger(props: SvgProps) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 50 50"
            fill="none"
            {...props}
        >
            <Path
                d="M8.333 37.5h20.33M8.333 25h25.33M8.333 12.5h33.334"
                stroke="#fff"
                strokeWidth={5}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default Burger
