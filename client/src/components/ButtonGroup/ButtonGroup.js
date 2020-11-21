import React, {useState} from 'react';
import styles from './ButtonGroup.module.sass';

const defaultButtons = [
  {
    card:
      {
        id: 1,
        title: 'Yes',
        description: 'The Domain should exactly match the name',
      },
  },
  {
    card:
      {
        id: 2,
        title: 'Yes',
        description: 'But minor variations are allowed (Recommended',
      },
  },
  {
    card:
      {
        id: 3,
        title: 'No',
        description: 'I am only looking for a name, not a Domain',
      },
  },
];

const ButtonGroup = () => {

  const [toggledButton, setToggledButton] = useState();

  function toggleButton(id) {
    setToggledButton(id);
  }

  return (
    <div className={styles.buttonGroupContainer}>
      {defaultButtons.map((button) => {
        const {id, title, description} = button.card;
        return (
          <button
            key={id}
            onClick={() => toggleButton(id)}
            className={toggledButton === id ? `${styles.active}` : styles.card}>
            <div className={styles.card_inner}>
              <div>
                <span className={styles.choice}>{title}</span>
              </div>
              <h5 className={styles.title}>{description}</h5>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
