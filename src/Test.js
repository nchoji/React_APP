import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import App from './App'

const baseURL = 'https://hn.algolia.com/api/v1/search?query=redux'

const Test = () => {
  /*
  const [data, setData] = useState({ hits: [] })
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </>
  )
  */


  const [prefs, setPrefs] = useState([
    { code: "01", name: "北海道", checked: false },
    { code: "02", name: "青森県", checked: false },
    { code: "03", name: "岩手県", checked: false },
    { code: "04", name: "宮城県", checked: false },
    { code: "05", name: "秋田県", checked: false },
    { code: "06", name: "山形県", checked: false },
    { code: "07", name: "福島県", checked: false },
    { code: "08", name: "茨城県", checked: false },
    { code: "09", name: "栃木県", checked: false },
    { code: "10", name: "群馬県", checked: false },
    { code: "11", name: "埼玉県", checked: false },
    { code: "12", name: "千葉県", checked: false },
    { code: "13", name: "東京都", checked: false },
    { code: "14", name: "神奈川県", checked: false },
    { code: "15", name: "新潟県", checked: false },
    { code: "16", name: "富山県", checked: false },
    { code: "17", name: "石川県", checked: false },
    { code: "18", name: "福井県", checked: false },
    { code: "19", name: "山梨県", checked: false },
    { code: "20", name: "長野県", checked: false },
    { code: "21", name: "岐阜県", checked: false },
    { code: "22", name: "静岡県", checked: false },
    { code: "23", name: "愛知県", checked: false },
    { code: "24", name: "三重県", checked: false },
    { code: "25", name: "滋賀県", checked: false },
    { code: "26", name: "京都府", checked: false },
    { code: "27", name: "大阪府", checked: false },
    { code: "28", name: "兵庫県", checked: false },
    { code: "29", name: "奈良県", checked: false },
    { code: "30", name: "和歌山県", checked: false },
    { code: "31", name: "鳥取県", checked: false },
    { code: "32", name: "島根県", checked: false },
    { code: "33", name: "岡山県", checked: false },
    { code: "34", name: "広島県", checked: false },
    { code: "35", name: "山口県", checked: false },
    { code: "36", name: "徳島県", checked: false },
    { code: "37", name: "香川県", checked: false },
    { code: "38", name: "愛媛県", checked: false },
    { code: "39", name: "高知県", checked: false },
    { code: "40", name: "福岡県", checked: false },
    { code: "41", name: "佐賀県", checked: false },
    { code: "42", name: "長崎県", checked: false },
    { code: "43", name: "熊本県", checked: false },
    { code: "44", name: "大分県", checked: false },
    { code: "45", name: "宮崎県", checked: false },
    { code: "46", name: "鹿児島県", checked: false },
    { code: "47", name: "沖縄県", checked: false }
  ]);

  const onChange = (e) => {
    const newPrefs = prefs.map((pref) => {
      const newPref = { ...pref }
      if (newPref.code === e.target.value) {
        newPref.checked = !newPref.checked
      }
      return newPref
    })
    setPrefs(newPrefs)

    let checkedPrefList = []
    newPrefs
      .filter((pref) => pref.checked)
      .forEach((pref) => checkedPrefList.push(pref))

    console.log(checkedPrefList)
  }
  return (
    <div>
      {prefs.map((pref) => {
        return (
          <div key={pref.code}>
            <input
              id={pref.code}
              type="checkbox"
              value={pref.code}
              onChange={onChange}
            />
            <label htmlFor={pref.code}>
              {pref.name}
            </label>
          </div>
        )
      })}
    </div>
  )

}

export default Test
