const Newsletter = () => {
  return (
    <form className='foot__newsletter'>
        <label htmlFor="newsletter" className='foot__newsletterLabel'>
        <input type="email" name="newsletter" id="newsletter" className='foot__newsletterInput' />
        </label>
        <button type="" className='foot__newsletterbtn'></button>
    </form>
  );
};

export default Newsletter;
