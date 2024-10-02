import * as React from "react"
import Svg, {
    G,
    Circle,
    Mask,
    Path,
    Defs,
    LinearGradient,
    Stop, SvgProps
} from "react-native-svg"

function TestWeather(props: SvgProps) {
    return (
        <Svg
            width={154}
            height={157}
            viewBox="0 0 404 397"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_f_2_276)">
                <Circle cx={244} cy={105} r={61} fill="#FFC701" fillOpacity={0.5} />
            </G>
            <Circle
                cx={244}
                cy={107}
                r={57.5}
                fill="url(#paint0_linear_2_276)"
                stroke="url(#paint1_linear_2_276)"
                strokeWidth={3}
            />
            <Mask
                id="a"
                style={{
                    maskType: "alpha"
                }}
                maskUnits="userSpaceOnUse"
                x={185}
                y={81}
                width={118}
                height={85}
            >
                <Path
                    d="M303 107c0 32.585-26.415 59-59 59s-59-26.415-59-59 21.915-25 54.5-25 63.5-7.585 63.5 25z"
                    fill="url(#paint2_linear_2_276)"
                />
            </Mask>
            <G filter="url(#filter1_f_2_276)" mask="url(#a)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M290.5 257.997c.166.002.333.003.5.003 23.748 0 43-19.252 43-43s-19.252-43-43-43c-.167 0-.334.001-.5.003V172h-27.413c.601-3.577.913-7.252.913-11 0-36.451-29.549-66-66-66s-66 29.549-66 66c0 3.894.337 7.709.984 11.418C112.084 175.343 96 193.293 96 215c0 23.748 19.252 43 43 43 .168 0 .335-.001.502-.003l-.002.003h151v-.003z"
                    fill="#E18700"
                />
            </G>
            <G filter="url(#filter2_bd_2_276)">
                <Mask id="b" fill="#fff">
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M265.5 262.997c.166.002.333.003.5.003 23.748 0 43-19.252 43-43s-19.252-43-43-43c-.167 0-.334.001-.5.003V177h-11.109a66.47 66.47 0 00.609-9c0-36.451-29.549-66-66-66s-66 29.549-66 66c0 3.439.263 6.817.77 10.115A43.142 43.142 0 00114 177c-23.748 0-43 19.252-43 43s19.252 43 43 43c.168 0 .335-.001.502-.003l-.002.003h151v-.003z"
                    />
                </Mask>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M265.5 262.997c.166.002.333.003.5.003 23.748 0 43-19.252 43-43s-19.252-43-43-43c-.167 0-.334.001-.5.003V177h-11.109a66.47 66.47 0 00.609-9c0-36.451-29.549-66-66-66s-66 29.549-66 66c0 3.439.263 6.817.77 10.115A43.142 43.142 0 00114 177c-23.748 0-43 19.252-43 43s19.252 43 43 43c.168 0 .335-.001.502-.003l-.002.003h151v-.003z"
                    fill="url(#paint3_linear_2_276)"
                />
                <Path
                    d="M265.5 262.997l.034-3a3 3 0 00-3.034 3h3zm0-85.994h-3a3 3 0 003.034 3l-.034-3zm0-.003h3a3 3 0 00-3-3v3zm-11.109 0l-2.972-.405a3.003 3.003 0 00.712 2.378 3.003 3.003 0 002.26 1.027v-3zm-130.621 1.115l-.679 2.922a3.001 3.001 0 003.644-3.378l-2.965.456zm-9.268 84.882l2.354 1.86a3 3 0 00-2.388-4.86l.034 3zm-.002.003l-2.354-1.86A3.001 3.001 0 00114.5 266v-3zm151 0v3a3 3 0 003-3h-3zm-.034 2.997L266 266v-6c-.155 0-.311-.001-.466-.003l-.068 6zM266 266c25.405 0 46-20.595 46-46h-6c0 22.091-17.909 40-40 40v6zm46-46c0-25.405-20.595-46-46-46v6c22.091 0 40 17.909 40 40h6zm-46-46l-.534.003.068 6c.155-.002.31-.003.466-.003v-6zm-3.5 3v.003h6V177h-6zm-8.109 3H265.5v-6h-11.109v6zm2.973-2.595A69.66 69.66 0 00258 168h-6c0 2.917-.198 5.786-.581 8.595l5.945.81zM258 168c0-38.108-30.892-69-69-69v6c34.794 0 63 28.206 63 63h6zm-69-69c-38.108 0-69 30.892-69 69h6c0-34.794 28.206-63 63-63v-6zm-69 69c0 3.593.275 7.123.805 10.571l5.93-.912A63.515 63.515 0 01126 168h-6zm4.449 7.193A46.107 46.107 0 00114 174v6c3.131 0 6.174.359 9.091 1.037l1.358-5.844zM114 174c-25.405 0-46 20.595-46 46h6c0-22.091 17.909-40 40-40v-6zm-46 46c0 25.405 20.595 46 46 46v-6c-22.091 0-40-17.909-40-40h-6zm46 46c.179 0 .358-.001.536-.003l-.068-6L114 260v6zm2.854-1.14l.002-.003-4.708-3.719-.002.002 4.708 3.72zM265.5 260h-151v6h151v-6zm-3 2.997V263h6v-.003h-6z"
                    fill="url(#paint4_linear_2_276)"
                    mask="url(#b)"
                />
            </G>
            <G filter="url(#filter3_bd_2_276)">
                <Mask id="c" fill="#fff">
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M343.563 218.351l.361.002c17.163 0 31.076-13.913 31.076-31.076 0-17.162-13.913-31.075-31.076-31.075-.12 0-.241 0-.361.002v-.002h-8.028c.29-2.127.44-4.298.44-6.505 0-26.342-21.355-47.697-47.698-47.697-26.342 0-47.697 21.355-47.697 47.697 0 2.486.19 4.927.556 7.31a31.166 31.166 0 00-7.06-.805c-17.163 0-31.076 13.913-31.076 31.075 0 17.163 13.913 31.076 31.076 31.076l.363-.002-.002.002h109.126v-.002z"
                    />
                </Mask>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M343.563 218.351l.361.002c17.163 0 31.076-13.913 31.076-31.076 0-17.162-13.913-31.075-31.076-31.075-.12 0-.241 0-.361.002v-.002h-8.028c.29-2.127.44-4.298.44-6.505 0-26.342-21.355-47.697-47.698-47.697-26.342 0-47.697 21.355-47.697 47.697 0 2.486.19 4.927.556 7.31a31.166 31.166 0 00-7.06-.805c-17.163 0-31.076 13.913-31.076 31.075 0 17.163 13.913 31.076 31.076 31.076l.363-.002-.002.002h109.126v-.002z"
                    fill="url(#paint5_linear_2_276)"
                />
                <Path
                    d="M343.563 218.351l.034-3a3.002 3.002 0 00-3.034 3h3zm0-62.147h-3a3 3 0 003.034 3l-.034-3zm0-.002h3a3 3 0 00-3-3v3zm-8.028 0l-2.972-.406a2.997 2.997 0 002.972 3.406v-3zm-94.399.805l-.678 2.923a3 3 0 003.644-3.379l-2.966.456zm-6.697 61.344l2.354 1.859a3.001 3.001 0 00-2.389-4.859l.035 3zm-.002.002l-2.355-1.859a3.001 3.001 0 002.355 4.859v-3zm109.126 0v3a3 3 0 003-3h-3zm-.034 2.998l.395.002v-6l-.327-.002-.068 6zm.395.002c18.82 0 34.076-15.256 34.076-34.076h-6c0 15.506-12.57 28.076-28.076 28.076v6zM378 187.277c0-18.819-15.256-34.075-34.076-34.075v6c15.506 0 28.076 12.57 28.076 28.075h6zm-34.076-34.075c-.132 0-.263 0-.395.002l.068 6c.109-.002.218-.002.327-.002v-6zm-3.361 3v.002h6v-.002h-6zm-5.028 3h8.028v-6h-8.028v6zm2.973-2.595c.308-2.261.467-4.567.467-6.91h-6c0 2.071-.141 4.107-.412 6.099l5.945.811zm.467-6.91c0-27.999-22.698-50.697-50.698-50.697v6c24.686 0 44.698 20.012 44.698 44.697h6zM288.277 99c-27.999 0-50.697 22.698-50.697 50.697h6c0-24.685 20.012-44.697 44.697-44.697v-6zm-50.697 50.697c0 2.639.202 5.233.591 7.766l5.931-.912a44.976 44.976 0 01-.522-6.854h-6zm4.235 4.388a34.181 34.181 0 00-7.739-.883v6c2.198 0 4.334.252 6.382.728l1.357-5.845zm-7.739-.883c-18.82 0-34.076 15.256-34.076 34.075h6c0-15.505 12.57-28.075 28.076-28.075v-6zM200 187.277c0 18.82 15.256 34.076 34.076 34.076v-6c-15.506 0-28.076-12.57-28.076-28.076h-6zm34.076 34.076l.397-.002-.069-6-.328.002v6zm2.716-1.141l.001-.002-4.709-3.718-.002.002 4.71 3.718zm106.771-4.859H234.437v6h109.126v-6zm-3 2.998v.002h6v-.002h-6z"
                    fill="url(#paint6_linear_2_276)"
                    mask="url(#c)"
                />
            </G>
            <G filter="url(#filter4_bdd_2_276)" strokeWidth={3}>
                <Path
                    d="M130.102 252.607c3.021-3.876 9.23-1.987 9.58 2.914l1.174 16.434c.584 8.178-7.216 14.4-15.06 12.014-7.845-2.386-10.858-11.897-5.819-18.365l10.125-12.997z"
                    fill="url(#paint7_linear_2_276)"
                    stroke="url(#paint8_linear_2_276)"
                />
                <Path
                    d="M187.61 252.607c3.02-3.876 9.23-1.987 9.58 2.914l1.173 16.434c.584 8.178-7.215 14.4-15.06 12.014-7.844-2.386-10.858-11.897-5.818-18.365l10.125-12.997z"
                    fill="url(#paint9_linear_2_276)"
                    stroke="url(#paint10_linear_2_276)"
                />
                <Path
                    d="M245.117 252.607c3.02-3.876 9.23-1.987 9.58 2.914l1.173 16.434c.584 8.178-7.215 14.4-15.059 12.014-7.845-2.386-10.858-11.897-5.819-18.365l10.125-12.997z"
                    fill="url(#paint11_linear_2_276)"
                    stroke="url(#paint12_linear_2_276)"
                />
            </G>
            <G filter="url(#filter5_bdd_2_276)" strokeWidth={3}>
                <Path
                    d="M145.276 298.128c3.02-3.877 9.23-1.988 9.58 2.914l1.173 16.433c.584 8.178-7.215 14.401-15.06 12.014-7.844-2.386-10.858-11.897-5.818-18.365l10.125-12.996z"
                    fill="url(#paint13_linear_2_276)"
                    stroke="url(#paint14_linear_2_276)"
                />
                <Path
                    d="M193.863 298.128c3.02-3.877 9.23-1.988 9.58 2.914l1.173 16.433c.584 8.178-7.215 14.401-15.06 12.014-7.844-2.386-10.858-11.897-5.818-18.365l10.125-12.996z"
                    fill="url(#paint15_linear_2_276)"
                    stroke="url(#paint16_linear_2_276)"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_2_276"
                    x1={244}
                    y1={48}
                    x2={244}
                    y2={166}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFE600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_2_276"
                    x1={244}
                    y1={48}
                    x2={244}
                    y2={166}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_2_276"
                    x1={244}
                    y1={48}
                    x2={244}
                    y2={166}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFD600" />
                    <Stop offset={1} stopColor="#FF7A00" />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_2_276"
                    x1={190}
                    y1={50.5}
                    x2={190}
                    y2={285.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_2_276"
                    x1={190}
                    y1={102}
                    x2={190}
                    y2={263}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_2_276"
                    x1={297}
                    y1={105.5}
                    x2={297}
                    y2={231.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_2_276"
                    x1={289}
                    y1={102}
                    x2={289}
                    y2={218.353}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_2_276"
                    x1={139.905}
                    y1={237.585}
                    x2={125.359}
                    y2={285.404}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_2_276"
                    x1={139.905}
                    y1={237.585}
                    x2={125.359}
                    y2={285.404}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_2_276"
                    x1={197.413}
                    y1={237.585}
                    x2={182.867}
                    y2={285.404}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_2_276"
                    x1={197.413}
                    y1={237.585}
                    x2={182.867}
                    y2={285.404}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_2_276"
                    x1={254.92}
                    y1={237.585}
                    x2={240.374}
                    y2={285.404}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint12_linear_2_276"
                    x1={254.92}
                    y1={237.585}
                    x2={240.374}
                    y2={285.404}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint13_linear_2_276"
                    x1={155.079}
                    y1={283.105}
                    x2={140.533}
                    y2={330.925}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint14_linear_2_276"
                    x1={155.079}
                    y1={283.105}
                    x2={140.533}
                    y2={330.925}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
                <LinearGradient
                    id="paint15_linear_2_276"
                    x1={203.666}
                    y1={283.105}
                    x2={189.12}
                    y2={330.925}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#138EFF" />
                    <Stop offset={1} stopColor="#00E0FF" />
                </LinearGradient>
                <LinearGradient
                    id="paint16_linear_2_276"
                    x1={203.666}
                    y1={283.105}
                    x2={189.12}
                    y2={330.925}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default TestWeather
