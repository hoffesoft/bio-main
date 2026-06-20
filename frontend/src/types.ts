/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";

export interface SystemItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  icon: string;
  accentColor: string;
  gradient: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}
