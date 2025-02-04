import { Button } from '@heroui/react';
import React from 'react';

export default function Home(): React.ReactElement {
  return (
    <main className="container mx-auto min-h-screen px-4 py-12">
      <div className="flex min-h-[calc(100vh-6rem)] flex-col gap-8">
        <div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-8 shadow-lg">
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-center text-4xl font-bold">
              Next.js + HeroUI デモ
            </h1>
            <p className="text-center text-lg">
              モダンでスタイリッシュなUIコンポーネントを使って、美しいウェブアプリケーションを構築しましょう
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 shadow-sm hover:bg-gray-100"
            >
              始めましょう
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            主な機能
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'モダンなデザイン',
                description: 'HeroUIの美しいコンポーネントを活用',
              },
              {
                title: 'レスポンシブ',
                description: 'あらゆるデバイスで最適な表示',
              },
              {
                title: 'カスタマイズ可能',
                description: 'TailwindCSSで自由にスタイリング',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
