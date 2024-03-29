import { Card } from 'Atoms';
import React, { FunctionComponent } from 'react';

const quoteBlock = [
  '{{@ cms.home.quotes.de-plum @}}',
  '{{@ cms.home.quotes.btth-ditch @}}',
  '{{@ cms.home.quotes.btth-happiness @}}',
  '{{@ cms.home.quotes.btth-war @}}',
  '{{@ cms.home.quotes.sotr-dream @}}',
  '{{@ cms.home.quotes.sotr-luck @}}',
  '{{@ cms.home.quotes.sotr-passivity @}}',
  '{{@ cms.home.quotes.sotr-philosophy @}}',
  '{{@ cms.home.quotes.sotr-profit @}}',
  '{{@ cms.home.quotes.sotr-strength @}}',
  '{{@ cms.home.quotes.sotr-trust @}}',
];

const getQuote = (quotes: string[]): string => {
  const randomNum = Math.floor(Math.random() * Math.floor(quotes.length));

  return quotes[randomNum];
};

export const HomeContainer: FunctionComponent = () => {
  // render
  return (
    <Card className="w-5/6 md:w-3/5 lg:w-1/2">
      <p className="p-3 font-exon text-scale-6">{getQuote(quoteBlock)}</p>
    </Card>
  );
};
