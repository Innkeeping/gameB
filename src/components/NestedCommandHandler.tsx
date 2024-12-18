// NestedCommandHandler.tsx
import React, { useState, useCallback, useEffect} from 'react'
import { categories, Link } from './categories'

interface CommandHistory {
  command: string;
  output: React.ReactNode
}

interface CommandHandlerProps {
  setHistory: React.Dispatch<React.SetStateAction<CommandHistory[]>>
  inputRef?: React.RefObject<HTMLInputElement>
  closeModal: () => void
}

const NestedCommandHandler: React.FC<CommandHandlerProps> = ({ setHistory, inputRef, closeModal }) => {
  const [input, setInput] = useState('')
  const [links, setLinks] = useState<Link[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [mode, setMode] = useState<'command' | 'navigation'>('command')


  const commandMap: { [key: string]: string } = {
    'patterns': 'patterns',
    'collective': 'collective',
    'regenerative': 'regenerative',
    'anti-rivalrous': 'antiRivalrous',
    'long-term': 'longTerm',
    'coherence': 'coherence',
    'emergent': 'emergent',
    'main': 'main',
  }

  const handleCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    let output: React.ReactNode;
    const mappedCmd = commandMap[trimmedCmd]

    if (mappedCmd === 'main') {
      closeModal()
      return;
    } else if (mappedCmd && mappedCmd in categories) {
      const categoryLinks = categories[mappedCmd]
      setLinks(categoryLinks)
      setSelectedIndex(0)
      setMode('navigation')
      output = (
        <div className="space-y-2">
          {categoryLinks.map((link, linkIndex) => (
            <div key={linkIndex}>
              <span className="font-medium">{link.title}</span>
              <ul className="ml-4 space-y-1">
                {link.urls.map((url, urlIndex) => {
                  const flatIndex = linkIndex === 0 ? urlIndex : links.slice(0, linkIndex).reduce((sum, l) => sum + l.urls.length, 0) + urlIndex;
                  return (
                    <li key={urlIndex} className={flatIndex === selectedIndex ? 'bg-blue-200 p-1 rounded' : 'p-1'}>
                      <a
                        href={url}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {url}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )
    } else if (trimmedCmd === 'clear') {

      setHistory([
        {
          command: '',
          output: (
            <div className="text-emerald-400">
              Type 'help' to see available commands.
            </div>
          ),
        },
      ])
      setLinks([])
      setSelectedIndex(null)
      setMode('command')

    } else if (trimmedCmd === 'help') {
      output = (
        <div className="text-emerald-400">
          <p className="mb-1">[Available Commands]</p>
          <ul className="ml-4 space-y-1">
            <li>patterns - View regenerative patterns</li>
            <li>collective - View collective intelligence resources</li>
            <li>regenerative - View regenerative design resources</li>
            <li>anti-rivalrous - View anti-rivalrous dynamics resources</li>
            <li>long-term - View long-term thinking resources</li>
            <li>coherence - View coherent pluralism resources</li>
            <li>emergent - View emergent properties resources</li>
            <li>clear - Clear terminal screen</li>
            <li>main - Return to main terminal</li>
            <li>help - Display available commands</li>
          </ul>
        </div>
      )
    } else {
      output = <p className="text-red-500">Command not found: {trimmedCmd}</p>;
    }


    setHistory((prevHistory) => [
      ...prevHistory,
      { command: cmd, output },
    ])


    if (trimmedCmd !== 'clear') {
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          command: '',
          output: (
            <div className="text-emerald-400">
              Type 'help' to see available commands.
            </div>
          ),
        },
      ])
    }
  }, [setHistory, closeModal, setLinks, setSelectedIndex, setMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('Key pressed:', e.key)

    if (mode === 'command') {
      if (e.key === 'Enter') {
        handleSubmit(e)
      }
    } else if (mode === 'navigation') {
      if (e.key === 'Enter' || e.key === ' ') {
        if (selectedIndex !== null) {
          const flatIndex = selectedIndex
          let cumulativeIndex = 0

          for (const link of links) {
            if (flatIndex < cumulativeIndex + link.urls.length) {
              const urlIndex = flatIndex - cumulativeIndex
              console.log('Opening URL:', link.urls[urlIndex])
              window.open(link.urls[urlIndex], '_blank')
              break
            }
            cumulativeIndex += link.urls.length
          }
        }
      } else if (e.key === 'ArrowUp') {
        if (selectedIndex !== null && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1)
        }
      } else if (e.key === 'ArrowDown') {
        if (selectedIndex !== null) {
          let totalUrls = links.reduce((sum, link) => sum + link.urls.length, 0);
          if (selectedIndex < totalUrls - 1) {
            setSelectedIndex(selectedIndex + 1)
          }
        }
      } else if (e.key === 'ArrowLeft') {
        if (selectedIndex !== null && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1)
        }
      } else if (e.key === 'ArrowRight') {
        if (selectedIndex !== null) {
          let totalUrls = links.reduce((sum, link) => sum + link.urls.length, 0);
          if (selectedIndex < totalUrls - 1) {
            setSelectedIndex(selectedIndex + 1)
          }
        }
      } else if (e.key === 'Escape') {

        setLinks([])
        setSelectedIndex(null)
        setMode('command')
        setInput('')
      } else {

        setLinks([])
        setSelectedIndex(null)
        setMode('command')
        setInput(e.key)
        e.preventDefault()
      }
    }
  }, [handleSubmit, links, selectedIndex, setSelectedIndex, mode, setMode, setInput]);

  useEffect(() => {

    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  useEffect(() => {
    console.log('Links:', links)
    console.log('Selected Index:', selectedIndex)
    console.log('Mode:', mode)
  }, [links, selectedIndex, mode])

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap">
        <span className="text-emerald-600">seeker@game-b</span>
        <span className="text-emerald-400">:~$</span>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 min-w-[200px] bg-transparent outline-none text-emerald-400"
          ref={inputRef}
          autoFocus
        />
      </form>
      <div className="mt-4">
        {links.map((link, linkIndex) => (
          <div key={linkIndex}>
            <span className="font-medium">{link.title}</span>
            <ul className="ml-4 space-y-1">
              {link.urls.map((url, urlIndex) => {
                const flatIndex = linkIndex === 0 ? urlIndex : links.slice(0, linkIndex).reduce((sum, l) => sum + l.urls.length, 0) + urlIndex;
                return (
                  <li key={urlIndex} className={flatIndex === selectedIndex ? 'bg-blue-200 p-1 rounded' : 'p-1'}>
                    <a
                      href={url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NestedCommandHandler