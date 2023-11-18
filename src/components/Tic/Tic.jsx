// Імпорт необхідних залежностей та компонентів з React та власних хуків
import React from 'react';
import { useGameState } from '../../hooks/Tic/useGameState';
// import Tasks from './Tasks';
import './Tic.scss';
import UseStateReact from './UseStateReact';

// Функціональний компонент, що представляє гру "Крестики-нулики"
const Tic = () => {
	// Деструктуризація значень та функцій з власного хука useGameState
	const { getSymbolClassName, handleClickCells, restartGame, noOneWin, winnerSequence, step, cells, } = useGameState()

	// Визначення символу переможця, якщо такий є
	const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;

	// Функція для відображення символу з відповідними стилями
	const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>

	// Відображення інтерфейсу гри "Крестики-нулики"
	return (
		<div className="game">
			{/* Відображення інформації гри, включаючи переможця або поточного гравця */}
			<div className="game-info">
				{noOneWin
					?
					'Нічия'
					:
					<>
						{winnerSequence ? 'Переможець: ' : 'Хід: '} {renderSymbol(winnerSymbol ?? step)}
					</>
				}
			</div>

			{/* Відображення ігрового поля з клітинками, на які можна натискати */}
			<div className="game-field">
				{cells.map((el, idx) => {
					// Перевірка, чи поточна клітина є частиною послідовності переможця
					const isWinner = winnerSequence?.includes(idx)

					// Відображення кнопки для кожної клітини, застосовуючи стилі для переможців
					return (
						<button
							key={idx}
							onClick={() => handleClickCells(idx)}
							className={`cell ${isWinner ? 'cell--win' : ''}`}
						>
							{el ? renderSymbol(el) : null}
						</button>
					);
				})}
			</div>

			{/* Кнопка для перезапуску гри */}
			<button
				className={'cell cell-hover '}
				onClick={restartGame}
			>
				Рестарт
			</button>

			{/* Відображення додаткового компонента для виведення завдань, пов'язаних з грою */}
			{/* <Tasks /> */}
			<UseStateReact />
		</div>
	);
};

// Експорт компонента Tic як основного експорту
export default Tic;
