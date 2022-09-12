const BranchItem = ({ item, onClick }) => {
  return (
    <div className="branch-item" onClick={onClick}>
      <b>{item.label}</b>
      <p>{item.addrLine1}</p>
      <p>{`${item.city}, ${item.state}`}</p>
      <p>{item.phone}</p>
    </div>
  );
};

export default BranchItem;
