// commandHandler.tsx
import React, { useState, useCallback } from 'react'
import Help from '../commands/Help'
import Begin from '../commands/Begin'
import MetaCrisis from '../commands/Metacrisis'
import GameA from '../commands/GameA'
import GameB from '../commands/GameB'
import Patterns from '../commands/Patterns'
import Quest from '../commands/Quest'
import Study from '../commands/Study';
import Local from '../commands/Local'
import Connect from '../commands/Connect'
import Experiment from '../commands/Experiment'
import Share from '../commands/Share'
import Sudo from '../commands/Sudo'

interface CommandHistory {
  command: string
  output: React.ReactNode
}

interface CommandHandlerProps {
  setHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>
  openModal: () => void
  resetHistory: () => void
  setExpandedSection: (section: string | null) => void
  expandedSection: string | null
}

const CommandHandler: React.FC<CommandHandlerProps> = ({ setHistory, openModal, resetHistory, setExpandedSection, expandedSection }) => {
  const [input, setInput] = useState('')
  const [sudoAttempts, setSudoAttempts] = useState(0)

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    let output: React.ReactNode

    switch (trimmedCmd) {
      case 'help':
        output = <Help />
        break
      case 'begin':
        output = <Begin />
        break
      case 'metacrisis':
        output = <MetaCrisis />
        break
      case 'gamea':
        output = <GameA/>
        break
      case 'gameb':
        output = <GameB />
        break
      case 'patterns':
        output = <Patterns setExpandedSection={setExpandedSection} expandedSection={expandedSection} />;
        break
      case 'quest':
        output = <Quest />
        break
      case 'study':
        output = <Study />
        break
      case 'local':
        output = <Local />
        break
      case 'connect':
        output = <Connect />
        break
      case 'experiment':
        output = <Experiment />
        break
      case 'share':
        output = <Share expandedSection={expandedSection} setExpandedSection={setExpandedSection} />;
        break
      case '1':
        setExpandedSection('documentation')
        return
      case '2':
        setExpandedSection('channels')
        return
      case '3':
        setExpandedSection('methods')
        return
      case 'clear':
        resetHistory()
        return
      case 'terminal':
        openModal()
        return;
      case 'sudo':
        output = <Sudo setSudoAttempts={setSudoAttempts} />;
        break
      default:
        output = <p className="text-red-500">Command not found: {trimmedCmd}</p>;
        break
    }

    setHistory((prevHistory) => [
      ...prevHistory,
      { command: cmd, output },
    ])

    console.log(`Sudo attempts: ${sudoAttempts}`)
  }, [setHistory, openModal, sudoAttempts, resetHistory, setExpandedSection, expandedSection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap">
      <span className="text-emerald-600">seeker@game-b</span>
      <span className="text-emerald-400">:~$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 min-w-[200px] bg-transparent outline-none text-emerald-400"
        autoFocus={expandedSection === null} // Only autoFocus if expandedSection is null
      />
    </form>
  )
}

export default CommandHandler