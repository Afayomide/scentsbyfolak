
import perfume from "../assets/perfume.jpg"
import perfumeVid from "../assets/perfumevid.mp4"

function Body () {
    return(
        <main>
            <div className="first-section">
                <div>
         <img src={perfume} className="perfume-img"/>
         </div>

<section>
    <p className="about-text"><span className="about-name">Lattafa Khamrah</span> Luxurious oriental-spicy unisex fragrance combines priceless spices with the coziness of woody notes and the sweetness of vanilla. The dominant note of Khamrah is bergamot's zesty freshness, which is surrounded by cinnamon's warm, velvety spice and refined sage. The base of Lattafa Khamrah, on the other hand, offers a rich perfume that combines the sensuous delicacy of vanilla with spicy valuable woods, sweet smoky oud, smoky fragrant myrrh, spicy tonka bean, and vanilla resinous benzoin, shimmering softly in the rays. upscale amber.</p>
    <p id="price">Price: <span className="cancel-amount">₦65,000</span> <span className="amount">₦53,000</span> <span className="red-sale">sale</span></p>
    <div className="buttons">
    <a href="https://wa.link/tx3t7g">Contact Us</a>
    <a href="https://wa.link/xkijav">Buy Now</a>
        </div>
    </section>
            </div>
                  
                  <div className="features" id="features">
                    <h3>Lattafa Khamrah Features</h3>

                    <video 
                    className="perf-vid" 
                    src={perfumeVid}
                    controls={true}
                    />
                    <small>watch full review <a href="https://www.youtube.com/watch?v=TuY4ITJfRDo&t=149s"><span className="here">here</span></a></small>
                    <ul className="features-list">
                   <li> Size: 100ml</li>
<li>Multiple flavors in one scent so no need for buying multiple perfumes</li>
<li>fancy and really beautiful package</li>
                    </ul>
                  </div>

        </main>

    )
}

export default Body