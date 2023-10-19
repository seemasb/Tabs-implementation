import '../Styles/Tab.css';

export default function Tab({ active, content }) {
    return active ? <div className="tab-content">{content}</div> : null;
  }
    