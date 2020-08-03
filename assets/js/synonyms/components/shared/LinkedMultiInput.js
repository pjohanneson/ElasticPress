import React, { useContext, useState, useEffect } from 'react';
import MultiInput from './MultiInput';
import { Dispatch } from '../../context';

/**
 * Linked MultiInput
 * @param {String} synonymType
 * @param {Array} synonyms
 * @param {Number} index
 */
export default function LinkedMultiInput( { index, synonyms, removeAction, updateAction } ) {
	const dispatch = useContext( Dispatch );
	const [ tokens, setTokens ] = useState( synonyms || [] );

	useEffect( () => {
		dispatch( { type: updateAction, data: { index, tokens } } );
	}, [ tokens ] );

	/**
	 * Handle clearing the synonym.
	 */
	const handleClear = () => {
		dispatch( { type: removeAction, data: index } );
	};

	return (
		<MultiInput
			key={index}
			className="ep-synonyms__linked-multi-input"
			tokens={tokens}
			setTokens={setTokens}
			onClear={handleClear}
		/>
	);
}