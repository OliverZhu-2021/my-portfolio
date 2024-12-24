import classNames from 'classnames';

const AboutMenuItem = ({ title, active, onClick }) => {
    console.log('active', title, active);
    return(
      <>
        <div
          className={classNames('item', { active })}
          onClick={onClick}
        >
          <h2 className='title'>{title}</h2>
        </div>
      </>
    )
  };
  
  export default AboutMenuItem;