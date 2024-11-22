import transformerVariantGroup from '@unocss/transformer-variant-group'
import type { UserConfig } from 'unocss'
import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

const config: UserConfig = {
  presets: [presetUno(), presetWind(), presetIcons(), presetAnimations(), presetShadcn()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  preflights: [
    {
      getCSS: () => `
          :root {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
            --card: 0 0% 100%;
            --card-foreground: 222.2 84% 4.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 222.2 84% 4.9%;
            --primary: 241 84% 61%;
            --primary-foreground: 210 40% 98%;
            --secondary: 210 40% 96.1%;
            --secondary-foreground: 222.2 47.4% 11.2%;
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
            --accent: 210 40% 96.1%;
            --accent-foreground: 222.2 47.4% 11.2%;
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 40% 98%;
            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;
            --ring: 241 84% 61%;
            --radius: 0.5rem;
            --brand: 241 84% 61%; 
          }
      `,
    },
  ],
  theme: {
    colors: {
      brand: 'hsl(var(--brand))',
      success: '#09CBBF',
      error: {
        DEFAULT: '#FF402E',
        lighter: '#FF9696',
      },
      warning: {
        DEFAULT: '#EF6F08',
        lighter: '#FFBC6E',
      },
    },
  },
  safelist: ['animate-fade-in', '!animate-duration-360'],
  transformers: [transformerVariantGroup()],
}

export default defineConfig(config)
