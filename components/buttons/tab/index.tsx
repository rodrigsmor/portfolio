import styles from './tab.module.css';
import { Icon, IconContext } from '@phosphor-icons/react';

interface TabProps {
  id: string;
  Icon: Icon;
  label: string;
  isChecked: boolean;
  "aria-controls": string;
  weight?: 'fill' | 'bold';
  onClick: () => void;
}

export function Tab({
  id,
  Icon,
  label,
  isChecked,
  weight = 'fill',
  onClick,
  "aria-controls": ariaControls
}: TabProps) {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={isChecked}
      aria-controls={ariaControls}
      tabIndex={isChecked ? 0 : -1}
      className={styles.tabContainer}
      onClick={onClick}
    >
      <IconContext.Provider
        value={{
          "aria-hidden": true,
          weight,
          size: 20
        }}
      >
        {<Icon />}
      </IconContext.Provider>
      {label}
    </button>
  )
}