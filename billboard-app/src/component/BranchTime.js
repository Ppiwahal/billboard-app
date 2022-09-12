const BranchTime = ({ times }) => {
  return (
    <>
      <div className="time-container">
        <h2>Branch Hours</h2>
        <div className="divider" />
        <div>
          {times.map((item) => (
            <div className="time-child-container">
              <span className="day-of-week">{item.dayOfWeek}</span>
              {item.closeTime === "Closed" ? (
                <>
                  <span className="closed time">Closed</span>
                  <span className="time"></span>
                </>
              ) : (
                <>
                  <span className="time lable">{item.openTime}</span> -
                  <span className="time lable">{item.closeTime}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="open">
        Yes we're <br />
        OPEN
      </div>
    </>
  );
};

export default BranchTime;
