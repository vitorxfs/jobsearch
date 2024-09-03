"use client"

import React, { useState } from 'react';

export interface CheckBoxData { checked: boolean; label?: string }

interface MultiSelectorProps {
  values: string[],
  checkboxes: Record<string, CheckBoxData>;
  changeCheckbox: (value: string) => void;
}

export function MultiSelector({values, checkboxes, changeCheckbox}: MultiSelectorProps) {
  const handleLabelKeyDown = (e: React.KeyboardEvent, value: string) => {
    if(e.code && e.code === 'Enter') {
      changeCheckbox(value)
    }
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {values.map((value) => (
        <div key={value}>
          <label
            tabIndex={1}
            onKeyDown={(e) => handleLabelKeyDown(e, value)}
            className={`px-3 py-1 rounded-full border border-green-400 block ${checkboxes[value].checked ? 'bg-green-400 text-black' : ''}`}
          >
            <input type="checkbox" id={value} checked={checkboxes[value].checked} aria-checked={checkboxes[value].checked} onChange={() => changeCheckbox(value)} className="hidden" />
            {checkboxes[value].label || value}
          </label>
        </div>
      ))}
    </div>
  )
}
