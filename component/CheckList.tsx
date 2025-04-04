"use client";

import { useState } from "react";
import styles from "./CheckList.module.css"; 

export default function CheckboxList() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedPages, setSelectedPages] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedPages(Array(4).fill(newSelectAll));
  };

  const handlePageSelect = (index: number) => {
    const updatedPages = [...selectedPages];
    updatedPages[index] = !updatedPages[index];
    setSelectedPages(updatedPages);
    setSelectAll(updatedPages.every(Boolean));
  };

  return (
    <div className={styles.checkbox_container}>
      {/* Select All */}
      <div className={styles.checkbox_header}>
        <span style={{ fontSize: 14, color: "#1F2128" }}>All pages</span>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
          className={styles.checkbox}
        />
      </div>

      <div className={styles.separator} />

      {/* Pages List */}

      <div className={styles.checkbox_list}>
        {["Page 1", "Page 2", "Page 3", "Page 4"].map((page, index) => (
          <div key={index} className={styles.checkbox_item}>
            <span style={{ fontSize: 14, color: "#1F2128" }}>{page}</span>
            <input
              type="checkbox"
              checked={selectedPages[index]}
              onChange={() => handlePageSelect(index)}
              className={styles.checkbox}
            />
          </div>
        ))}
      </div>

      <div className={styles.separator}  />

      {/* Done Button */}
      <button className={styles.done_button}>Done</button>
    </div>
  );
}
