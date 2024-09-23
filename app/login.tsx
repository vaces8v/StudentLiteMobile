import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactElement, useState } from "react";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";
import * as Animatable from 'react-native-animatable';
import { ErrorNotification } from "../shared/ErrorNotification/ErrorNotification";
import {Link, useRouter} from "expo-router";

export default function Login(): ReactElement {
	const [errorMessage, setErrorMessage] = useState<string | undefined>();
	const router = useRouter()

	const alert = () => {
		router.push('/')
		let id: ReturnType<typeof setTimeout>;
		setErrorMessage("Неверный логин или пароль");
		id = setTimeout(() => setErrorMessage(undefined), 5000);
		return () => clearTimeout(id)
	}

	return (
		<LinearGradient
			colors={['#462ab2', '#1e124c']}
			style={styles.container}>
			<ErrorNotification message={errorMessage} />
			<View style={styles.content}>
				<Animatable.View
					animation="fadeIn"
					iterationCount={1}
					direction="alternate"
					easing="ease-in-out"
					duration={1000}
					style={styles.logoContainer}
				>
					<Image
						style={styles.logo}
						source={require('../assets/logo.png')}
						resizeMode="contain"
					/>
				</Animatable.View>
				<Animatable.View
					animation="fadeIn"
					iterationCount={1}
					direction="alternate"
					easing="ease-in-out"
					duration={2000}
					style={styles.form}>
					<Input
						autoCapitalize="none"
						autoCorrect={false}
						autoComplete="off"
						placeholderText="Email" />
					<Input
						autoCapitalize="none"
						autoCorrect={false}
						autoComplete="off"
						isPassword
						placeholderText="Пароль" />

					<Button onPress={alert}
						text="Войти" />

				</Animatable.View>
				<Link href="/email">
					<Animatable.Text
						animation="fadeIn"
						iterationCount={1}
						direction="alternate"
						easing="ease-in-out"
						duration={4000}
						style={{ color: "#FFF", fontFamily: "PoppinsSemiBold" }}>Написать нам почту</Animatable.Text>
				</Link>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 50,
	},
	content: {
		alignItems: 'center',
		gap: 30
	},
	logoContainer: {},
	logo: {
		height: 40,
		width: 190,
		marginTop: 70,
	},
	form: {
		alignSelf: "stretch",
		gap: 15
	}
});
