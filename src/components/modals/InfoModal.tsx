import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the devil fruit in 6 tries. After each guess, the color of the
        tiles will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="M" />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter G is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Y" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="M" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is a One piece adaptation from the open source version of the word
        guessing game we all know and love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        One piece adaptation by -{' '}
        <a
          href="https://github.com/Teja36/devil-fruit-wordle"
          className="underline font-bold"
        >
          teja36
        </a>{' '}
      </p>
    </BaseModal>
  )
}
