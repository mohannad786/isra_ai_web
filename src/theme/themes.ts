export const themes = {
  light: {
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600'
    },
    background: {
      primary: 'bg-white',
      secondary: 'bg-gray-50',
      card: 'bg-white'
    },
    border: {
      primary: 'border-gray-200'
    },
    button: {
      primary: 'bg-purple-600 hover:bg-purple-700'
    },
    glow: {
      primary: 'shadow-lg',
      accent: 'shadow-purple-500/20 hover:shadow-purple-500/30'
    }
  },
  dark: {
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300'
    },
    background: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800',
      card: 'bg-gray-800'
    },
    border: {
      primary: 'border-gray-700'
    },
    button: {
      primary: 'bg-purple-500 hover:bg-purple-600'
    },
    glow: {
      primary: 'shadow-lg shadow-purple-500/10',
      accent: 'shadow-purple-500/20 hover:shadow-purple-500/30'
    }
  }
} as const;