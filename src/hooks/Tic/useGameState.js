import { useState } from "react";

// Хук, що містить логіку гри "Крестики-нулики"
export function useGameState() {
	// Константи для символів гравців
	const SYMBOL_X = 'X';
	const SYMBOL_O = 'O';

	// Масив для представлення ігрового поля
	const ArrayCages = Array(9).fill(null);

	// Стани для керування станом гри
	const [cells, setCells] = useState(ArrayCages);
	const [step, setStep] = useState(SYMBOL_O);
	const [winnerSequence, setWinnerSequence] = useState();
	const [noOneWin, setNoOneWin] = useState(false);

	// Функція для перезапуску гри
	const restartGame = () => {
		setCells(ArrayCages);
		setStep(SYMBOL_O);
		setWinnerSequence(undefined);
		setNoOneWin(false);
	};

	// Функція для визначення переможця
	const computeWinner = (cells) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		// Перевірка для кожного рядка, стовпця та діагоналі
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				cells[a] &&
				cells[a] === cells[b] &&
				cells[a] === cells[c]
			) {
				return [a, b, c];
			}
		}
	};

	// Функція обробки кліків по клітинках
	const handleClickCells = (cellIndex) => {
		if (cells[cellIndex] || winnerSequence) {
			return;
		}

		const cellsCopy = cells.slice();
		cellsCopy[cellIndex] = step;
		setCells(cellsCopy);
		setStep(step === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
		const winner = computeWinner(cellsCopy);
		setWinnerSequence(winner);

		// Перевірка на нічию
		if (!winner) {
			if (cellsCopy.every((el) => Boolean(el))) {
				setNoOneWin(true);
			}
		}
	};

	// Функція для отримання класу стилів для символу
	const getSymbolClassName = (symbol) => {
		if (symbol === SYMBOL_O) return 'symbol--o';
		if (symbol === SYMBOL_X) return 'symbol--x';
		return '';
	};

	// Повернення необхідних значень та функцій
	return { getSymbolClassName, handleClickCells, computeWinner, restartGame, noOneWin, winnerSequence, step, cells, SYMBOL_O, SYMBOL_X }
}
