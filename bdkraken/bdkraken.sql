-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2020 a las 03:34:36
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdkraken`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_Prod` int(3) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Marca` varchar(30) NOT NULL,
  `Valor` int(8) NOT NULL,
  `Descripcion` varchar(300) NOT NULL,
  `Imagen` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_Prod`, `Nombre`, `Marca`, `Valor`, `Descripcion`, `Imagen`) VALUES
(14, 'Guitarra Acustica ', 'R.Say', 800000, 'La guitarra acústica es un instrumento musical armónico de cuerda bien templada que cuenta con una caja de resonancia para la amplificación del sonido producido por la vibración de las cuerdas, un mástil, un diapasón o trastero, un clavijero y un puente', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/acustica.jpg'),
(15, 'Gutarra Electrica', 'YAMAHA', 1000000, 'La guitarra eléctrica es un instrumento musical de seis cuerdas normalmente, que utiliza el principio de inducción electromagnética para convertir las vibraciones de sus cuerdas de metal en señales eléctricas.', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/electrica.jpg'),
(16, 'Teclado Electrico', 'SOUND', 1350000, 'Un teclado electrónico es un instrumento de teclado que generalmente puede reproducir muchos sonidos, similares o no a los que producen otros instrumentos musicales.\r\nEn algunos casos, su funcionamiento se basa en mecanismos eléctricos, electrónicos o digitales que crean los sonidos.', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/teclado.jpg'),
(17, 'Bateria', 'JINBAO', 1435000, 'La batería es un conjunto de instrumentos musicales de percusión usado por muchas agrupaciones musicales. El término «batería» también se refiere al músico que toca estos instrumentos', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/bateria.jpg'),
(18, 'Flauta', 'LOUPY', 60000, 'Se denomina flauta a un tipo de instrumento musical de viento. Por la sencillez de su construcción, puede que sea uno de los instrumentos más antiguos', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/flauta.jpg'),
(19, 'Trompeta', 'ARISTTON', 780000, 'La trompeta es un instrumento musical de viento, que pertenece a la familia de los instrumentos de viento metal o metales, fabricado en aleación de metal', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/trompeta.jpg'),
(20, 'Banjo', 'GE-MUSIC', 1430000, 'El banjo o banyo​ es un instrumento musical de 4, 5, 6 o 10 cuerdas, constituido por un aro o anillo de madera circular de unos 35 cm de diámetro', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/banjo.jpg'),
(21, 'Kit de Bajo', 'ATEMPO', 1550000, 'l bajo eléctrico, o simplemente bajo, es el miembro más grave de la familia de guitarras. Es un instrumento de cuerda pulsada similar en apariencia y construcción a una guitarra eléctrica o acústica', 'https://github.com/juanllano3311/kraken2/blob/master/img/bajo_kit.jpg?raw=true'),
(22, 'Ukelele', 'JOBS', 560000, 'El Ukelele​ es un instrumento de cuerda pulsada utilizado como instrumento principal en la música de las islas Hawái, Tahití y la isla de Pascua que originalmente tenía cinco cuerdas', 'https://raw.githubusercontent.com/juanllano3311/kraken2/master/img/ukelele.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_Prod`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_Prod` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
