/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Experimental',
    image: '/img/home/bucket-33279.svg',
    description: (
      <>
        <b>visual-nodes</b> is an experimental project. <br />
        The api is not finished and could change anytime!
      </>
    ),
  },
  {
    title: 'Focus on HomeAutomation',
    image: '/img/home/light-311119.svg',
    description: (
      <>
        <b>visual-nodes</b> could be used for anything, but we have to start somewhere.<br/>
        We decided to start with home-automation, because we needed it personally.
      </>
    ),
  },
  {
    title: 'Powered by NodeJS',
    image: '/img/home/network-782707.svg',
    description: (
      <>
        <b>visual-nodes</b> utilizes NodeJS and the NPM ecosystem to modularize the software.<br />
        Currently an internal NPM-Registry is used for management, but this could change in the future.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
