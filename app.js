$(".advice").hide(0)
$(".location").hide(0)

$("#input_container").click(function() {

	$(".city_placeholder").css("top", "0px")
	$(".city_placeholder").css("font-size", "20px")
	// $(".city").css("top", "5px")
	// $(".button").css("top", "5px")

})

let cityData = city.value

fetch("https://freegeoip.app/json/?apikey=6719b7a0-b686-11ec-8094-a3b1bae48427" + cityData)

.then(res => {

	return res.json()

})

.then(data => {

	console.log(data)
	let geoLocation = (data.city)
	$("#geo_location").html(geoLocation)

	setTimeout(function() {

		$(".location").slideDown(500)

	}, 1000)

	$("#location_btn_no").click(function() {

		$(".location").slideUp(500)

	})

	$("#location_btn_yes").click(function() {

		city.value = (data.city)
		$(".location").slideToggle(500)
		$(".city_placeholder").css("top", "0px")
		$(".city_placeholder").css("font-size", "20px")

		$(".weather_information_container").css("display", "block")
	$(".weather_information_container_flex").css("display", "flex")
	$(".card").css("height", "625px")
	$(".wrap").css("justify-content", "space-arround")
	$(".location").hide(500)

	$(".advice").hide(0)

	let cityData = city.value

	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityData + '&appid=44698139a4c481d17cb6dbc1fc43ae58')

	.then(response => {

		return response.json()

	})

	.then(data => {

		console.log(data)

		let t = (data.main.temp - 273).toFixed(2)
		let fl = (data.main.feels_like - 273).toFixed(2)
		let p = (data.main.pressure)
		let h = (data.main.humidity)
		let w = (data.wind.speed)
		// let sr = (data.sys.sunrise)
		// let ss = (data.sys.sunset)

		temperature.innerText = t + " °C"
		feels_like.innerText = fl + " °C"
		pressure.innerText = p + " mm"
		humidity.innerText = h + " %"
		wind.innerText = w + " m / s"
		// sunrise.innerText = sr
		// sunset.innerText = ss

		if (t > 0 && t < 10) {

			$(".wrap").css("background", "#00ff40")
			$(".advice_text").html("Сьогодні бажано взяти теплий одяг, який не продувається, А ще було б добре надіти шапку")
			$(".advice").css("height", "275px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "block")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "green")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

			// $(".advice").slideToggle(500)

		} else if (t > 10 && t < 20) {

			$(".wrap").css("background", "#ffbf00")
			$(".advice_text").html("Думаю сьогодні можна надіть шорти, але не забувай про вітерець")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "block")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "red")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t > 20 && t < 30) {

			$(".wrap").css("background", "#ff8000")
			$(".advice_text").html("Футболка, шорти та тапочки - це твоє спасіння в таку погоду")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "block")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "orange")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t > 30) {

			$(".wrap").css("background", "#ff4000")
			$(".advice_text").html("На твому місті, я б залишався вдома")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "block")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "orange")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)


		} else if (t < 0 && t > -10) {

			$(".wrap").css("background", "#00bfff")
			$(".advice_text").html("Не забуть надіти підштанники та зимові шкарпетки, якщо не хочеш труситися")
			$(".advice").css("height", "275px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "block")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "blue")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t < -10 && t > -20) {

			$(".wrap").css("background", "#0080ff")
			$(".advice_text").html("Якщо вже наважився вийти, то надіюсь, що ти не забув про ДУУЖЕЕ теплий одяг та санки )")
			$(".advice").css("height", "275px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "block")
			$(".title_span").css("color", "blue")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t < -30) {

			$(".wrap").css("background", "#0040ff")
			$(".advice_text").html("Думаю, сьогодні день краще присвятити серіалам і терлому чаю")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "block")
			$(".title_span").css("color", "blue")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		}

	})

	})

})

$("#button").click(function() {

	$(".weather_information_container").css("display", "block")
	$(".weather_information_container_flex").css("display", "flex")
	$(".card").css("height", "625px")
	$(".wrap").css("justify-content", "space-arround")
	$(".location").slideUp(500)

	$(".advice").hide(0)

	let cityData = city.value

	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityData + '&appid=44698139a4c481d17cb6dbc1fc43ae58')

	.then(response => {

		return response.json()

	})

	.then(data => {

		console.log(data)

		let t = (data.main.temp - 273).toFixed(2)
		let fl = (data.main.feels_like - 273).toFixed(2)
		let p = (data.main.pressure)
		let h = (data.main.humidity)
		let w = (data.wind.speed)
		// let sr = (data.sys.sunrise)
		// let ss = (data.sys.sunset)

		temperature.innerText = t + " °C"
		feels_like.innerText = fl + " °C"
		pressure.innerText = p + " mm"
		humidity.innerText = h + " %"
		wind.innerText = w + " m / s"
		// sunrise.innerText = sr
		// sunset.innerText = ss

		let arrA = ["Сьогодні бажано взяти теплий одяг, який не продувається, А ще було б добре надіти шапку", "Сьогодні не дуже тепло, такщо можна одіти весняну курточку"]
		let arrB = ["Думаю сьогодні можна надіть шорти, але не забувай про вітерець", "На мою думку, прогулятися по парку у футболці, було б не погано"]
		let arrC = ["Футболка, шорти та тапочки - це твоє спасіння в таку погоду", "В таку погодку, без холодного морозива ніяк"]
		let arrD = ["На твому місті, я б залишався вдома", "Якщо не хочеш піджаритись під сонцем, то сиди дома і пий багато води"]
		let arrE = ["Не забуть надіти підштанники та зимові шкарпетки, якщо не хочеш труситися", "Вирішив поліпити сніговика ? То надівай куртку і не забудь про рукавиці"]
		let arrF = ["Якщо вже наважився вийти, то надіюсь, що ти не забув про ДУУЖЕЕ теплий одяг та санки )", "Скажу одне 'ХОЛОДНО', тому вдівай все що є"]

		let random = Math.floor(Math.random() * 2)

		if (t > 0 && t < 10) {

			$(".wrap").css("background", "#00ff40")
			// $(".advice_text").html("Сьогодні бажано взяти теплий одяг, який не продувається, А ще було б добре надіти шапку")
			$(".advice").css("height", "275px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "block")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "green")
			$(".advice").css("background", "#38ef7d")
			$(".advice").css("box-shadow", "0px 0px 5px #38ef7d")

			if (random === 0) {

				$(".advice_text").html(arrA[0])

			} else {

				$(".advice_text").html(arrA[1])
				$(".advice").css("height", "250px")

			}

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

			// $(".advice").slideToggle(500)

		} else if (t > 10 && t < 20) {

			$(".wrap").css("background", "#ffbf00")
			// $(".advice_text").html("Думаю сьогодні можна надіть шорти, але не забувай про вітерець")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "block")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "red")
			$(".advice").css("background", "#f5af19")
			$(".advice").css("box-shadow", "0px 0px 5px #f5af19")

			if (random === 0) {

				$(".advice_text").html(arrB[0])

			} else {

				$(".advice_text").html(arrB[1])

			}

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t > 20 && t < 30) {

			$(".wrap").css("background", "#ff8000")
			// $(".advice_text").html("Футболка, шорти та тапочки - це твоє спасіння в таку погоду")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "block")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "orange")
			$(".advice").css("background", "#f5af19")
			$(".advice").css("box-shadow", "0px 0px 5px #f5af19")

			if (random === 0) {

				$(".advice_text").html(arrC[0])

			} else {

				$(".advice_text").html(arrC[1])

			}

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t > 30) {

			$(".wrap").css("background", "#ff4000")
			// $(".advice_text").html("На твому місті, я б залишався вдома")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "block")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "orange")
			$(".advice").css("background", "#f5af19")
			$(".advice").css("box-shadow", "0px 0px 5px #f5af19")

			if (random === 0) {

				$(".advice_text").html(arrD[0])

			} else {

				$(".advice_text").html(arrD[1])
				$(".advice").css("height", "275px")

			}

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)


		} else if (t < 0 && t > -10) {

			$(".wrap").css("background", "#00bfff")
			// $(".advice_text").html("Не забуть надіти підштанники та зимові шкарпетки, якщо не хочеш труситися")
			$(".advice").css("height", "275px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "block")
			$(".icon_6").css("display", "none")
			$(".title_span").css("color", "blue")
			$(".advice").css("background", "#11998e")
			$(".advice").css("box-shadow", "0px 0px 5px #999")

			if (random === 0) {

				$(".advice_text").html(arrE[0])

			} else {

				$(".advice_text").html(arrE[1])

			}

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t < -10 && t > -20) {

			$(".wrap").css("background", "#0080ff")
			// $(".advice_text").html("Якщо вже наважився вийти, то надіюсь, що ти не забув про ДУУЖЕЕ теплий одяг та санки )")
			$(".advice").css("height", "275px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "block")
			$(".title_span").css("color", "blue")
			$(".advice").css("background", "#11998e")
			$(".advice").css("box-shadow", "0px 0px 5px #999")

			if (random === 0) {

				$(".advice_text").html(arrF[0])

			} else {

				$(".advice_text").html(arrF[1])
				$(".advice").css("height", "250px")

			}

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		} else if (t < -30) {

			$(".wrap").css("background", "#0040ff")
			$(".advice_text").html("Думаю, сьогодні день краще присвятити серіалам і терлому чаю")
			$(".advice").css("height", "250px")
			$(".icon_1").css("display", "none")
			$(".icon_2").css("display", "none")
			$(".icon_3").css("display", "none")
			$(".icon_4").css("display", "none")
			$(".icon_5").css("display", "none")
			$(".icon_6").css("display", "block")
			$(".title_span").css("color", "blue")
			$(".advice").css("background", "#11998e")
			$(".advice").css("box-shadow", "0px 0px 5px #999")

			setTimeout(function() {

				$(".advice").slideToggle(500)

			}, 2500)

		}

	})

})

let darkMode = 0;

$("#dark_mode").click(function() {

	if (darkMode === 0) {

		$(".card").css("background-color", "#999")
		$(".card").css("border", "1px solid #000")
		$(".advice").css("border", "1px solid #000")
		$(".button").css("border", "1px solid #000")
		$(".advice_btn").css("border", "1px solid #000")
		$(".button").css("background-color", "#666")
		$(".advice_btn").css("background-color", "#666")

		darkMode = 1;

	} else if (darkMode == 1) {

		$(".card").css("background-color", "rgba(255, 255, 255, 0.3)")
		$(".card").css("backdrop-filter", "blur(5px)")
		$(".button").css("background-color", "darkgrey")
		$(".advice_btn").css("background-color", "lightgrey")
		$(".card").css("border", "1px solid #fff")
		$(".advice").css("border", "1px solid #fff")
		$(".button").css("border", "1px solid #fff")
		$(".advice_btn").css("border", "1px solid #fff")

		darkMode = 0;

	}

})

$("#button").mouseenter(function() {

	if (darkMode === 1) {

		$(".button").css("background-color", "#333")

	} else if (darkMode === 0) {

		$(".button").css("background-color", "grey")

	}

})

$("#button").mouseleave(function() {

	if (darkMode === 1) {

		$(".button").css("background-color", "#666")

	} else if (darkMode === 0) {

		$(".button").css("background-color", "darkgrey")
		
	}

})

$("#advice_btn").mouseenter(function() {

	if (darkMode === 1) {

		$(".advice_btn").css("background-color", "#333")

	} else if (darkMode === 0) {

		$(".advice_btn").css("background-color", "#555")

	}

})

$("#advice_btn").mouseleave(function() {

	if (darkMode === 1) {

		$(".advice_btn").css("background-color", "#666")

	} else if (darkMode === 0) {

		$(".advice_btn").css("background-color", "lightgrey")
		
	}

})

$("#advice_btn").click(function() {

	$(".advice").hide(150)

})