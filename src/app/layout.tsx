import { Provider } from '@/components/ui/provider'

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal?: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <div id="app-root">
            {children}
            {modal}
          </div>
        </Provider>
      </body>
    </html>
  )
}
