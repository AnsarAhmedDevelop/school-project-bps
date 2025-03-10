import React, { useEffect } from 'react'
import CommonBanner from '../components/CommonBanner';
import AOS from "aos";
import "aos/dist/aos.css";
const Infradetail = [
  {
    title: "PRE PRIMARY ACTIVITY ROOM",
    image: "/images/infra/activityRoom.jpg",
    desc: "BPPS is developing a unique activity room for the pre primary and primary kids. This room will be adequately equipped with modern toys, cycles and different types of slides and play houses. Kids can even watch movies, educational videos and power point presentation in this room. Preschool provides kids with a lifetime of knowledge.",
    id: 1,
  },
  {
    title: "COMPOSITE SCIENCE LAB",
    image: "/images/infra/science_lab.jpg",
    desc: "BPPS will also have composite science lab which will cater to the students Of middle school where they can unravel and explore the world Of science. At the initial level students are familiarized with the apparatus, equipments and specimens along with demonstrations of various experiments by teachers to develop skills and scientific temperament.",
    id: 2,
  },
  {
    title: "LIBRARY",
    image: "/images/infra/library.jpg",
    desc: "The serene ambience inspires love for reading. Acknowledging the fact that a library is a storehouse of knowledge, the school has provided students with a library architecture that is inspirational and conduciv to learning, improved communication and interaction. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. Interaction with eminent authors, book reviews and reading sessions are conducted regularly exposing students to good written and reading skills.",
    id: 3,
  },
  {
    title: "COMPUTER LAB",
    image: "/images/infra/computer.jpg",
    desc: "The State Of the art computer centre provides plenty opportunities to the students to get an exposure of IT environment and learn to use various tools and software in their daily life and across the syllabus.Easy access to the internet means instant access to information, allowing students to conduct independent research right in the classroom. Technology allows students to become content creators themselves. They can create wiki pages collaboratively, write student blogs, create videos, webpages and other online content.",
    id: 4,
  },

  {
    title: "DANCE ROOM",
    image: "/images/infra/danceRoom.jpg",
    desc: "There is a provision of spacious and well equipped dance studio at BPPS which will facilitate the creative, aesthetic and artistic talents of the school children. This room will be well equipped with musical and dance instruments and the technical equipment required bringing out the performing art skills of the students.",
    id: 5,
  },
  {
    title: "ART & CRAFT ROOM",
    image: "/images/infra/Art_craft_room.jpg",
    desc: "The splashes of colour reverberate with the diversity & vividity of human emotion in the art room at the junior level. Individual styles and techniques get honed and displayed at the middle and senior school level. BPPS will have a separate Art Room' where creativity of students is nurtured with necessary equipment to sensitize their aesthetic qualities. ",
    id: 6,
  },
  {
    title: "ENGLISH LANGUAGE LAB",
    image: "/images/infra/english_lang.jpg",
    desc: "English language lab at BPPS is designed to provide the learners with a strong platform for practical training in the language. A good language lab skilfully and efficiently develops the language skills of the learners. Students at BPPS would be exposed to functional English language and will be familiarized with the pronunciation styles that are vital in everyday usage of the English language in today's world. Learn English & get comfortable speaking the world's language.",
    id: 7,
  },
  {
    title: "MATHS LAB",
    image: "/images/infra/maths.jpg",
    desc: "The Mathematics laboratory at BPPS is a place where the students can experiment and explore patterns ideas. Students can find a collection of games, puzzles, and other teaching and learning materials. The state of the art world class Math Lab will sharpen the skills of students. Mathematics laboratory serves to teach students about different methodologies and bridges the gap between the real and the abstract world. Their skills of reasoning, logical thinking and connecting ideas enhance with every lab session. ",
    id: 8,
  },
  {
    title: "THE DISCOVERY ROOM",
    image: "/images/infra/discovery_room.jpg",
    desc: "The Discovery Room for Primary Classes I - V provides an opportunity to ascertain the principles of science through hands on activities and the use of audio visual material. A questioning scientific temperament is nurtured.",
    id: 9,
  },
  {
    title: "LEARNING HUB",
    image: "/images/infra/learning_hub.jpg",
    desc: "Teachers the change-makers of tomorrow are empowered through regular and constant research in the inviting ambience of the Learning Hub. Our latest addition to foster technology enabled education.",
    id: 10,
  },
  {
    title: "AUDIO VISUAL ROOM",
    image: "/images/infra/Audio_Visual_Room.jpeg",
    desc: "The use of audio visual aids is well integrated with the school curriculum and used by the staff and students alike. The Audio-Visual Room with its slide projector and screens is equipped both for teaching and presentations by students. A large collection of educational CDs and DVDs are used regularly as teaching aids for enhancement of the student's learning.",
    id: 11,
  },
  {
    title: "YOGA SESSIONS",
    image: "/images/infra/yoga.jpg",
    desc: "BPP School has concept of Yoga classes for the students. Flexibility of body and mental peace are some of the key benefits of regular yoga. Yoga is accepted worldwide as one of the most effective form of exercise to influence the mental control. It is a Compulsory activity at BPP School and there are no extra charges. A qualified yoga trainer imparts basic yoga knowledge.",
    id: 12,
  },
  {
    title: "TEACHERS RESEARCH CENTER",
    image: "/images/infra/Teacher_research_center.jpg",
    desc: "An IT enabled Resource Centre provides support to keep pace with the dynamic nature of learning and pedagogy in education. The In house programs are organized regularly and Learning Communities provide classroom teachers with real opportunities for continuous Professional Development, Research and Growth. Continuous professional learning and Learning Communities within the school provide teachers with regular in service training to share contemporary pedagogical practices and acquire skills for facilitating learning to the 21st century digital native learner. We seek to promote teacher efficacy, morale and professional engagement through our rigorous research and powerful professional development.",
    id: 13,
  },

  {
    title: "SPORTS",
    image: "/images/infra/sports.jpg",
    desc: "We believe that play enhances every aspect of child's development and learning. In fact, it is child's window to the external world and forms the foundation of social, intellectual, physical and emotional skills that are requisite for success in school as well as life.The very idea of including play, in required ratio with the academics, fulfils the prime objective of enriching students with creativity and thinking skills. We allow students to explore different environments by providing them playfields and facilities for basketball, Cricket, Taekwondo, Badminton etc. Apart from giving students opportunities, we foster their level of confidence with words of appreciation along with prizes and awards at events organised.",
    id: 14,
  },
  {
    title: "INFIRMARY",
    image: "/images/infra/infirmary.jpg",
    desc: "BPP School accommodates a well-equipped and well-furnished medical room, which is accessible during school hours. We have nursing attendants in place for ensuring that all the emergencies are taken care of. We conduct regular awareness programs for assisting students about various aspects of health education (diseases), first aid, healthy habits, diet management and stress management along with sessions of yoga and meditation. Awareness sessions, routine medical checkups are also conducted every year to keep a check on health issues.The school has a well maintained room to accommodate the students falling sick during the school hours.",
    id: 15,
  },
  {
    title: "VALUE EDUCATION",
    image: "/images/infra/Value_Education.jpg",
    desc: "Value Education is an important part of schooling. It is much needed in today's world. BPP School has a digital library short films which have underlying morals and values. There are films for Class 1 to 8, but they are also used for higher classes. The films are entertaining as well as instructive. There is a workbook along with the films. Each film has a corresponding worksheet which has various activities as well as questions. Children enjoy doing the workbook because, apart from answering question on their own, it has activities like colouring, sticking pictures. So, values are learnt in an enjoyable way. ",
    id: 16,
  },
  {
    title: "MUSIC",  
    desc: "Music is an integral part of our life. It is the most relaxing diversion in our stressful life. Children of all ages love music classes. This activity starts right from the beginning, the Nursery class and continues up to higher classes. BPPS will trains children in both - vocal and instrumental music. Children are taught songs in Hindi, Marathi and also in English. Songs are also earmarked for special occasions like Independence Day, Republic Day, national and social festivals. Training in instrumental music starts from class 5. Students are trained in instruments according to their talent and ability. The school has instruments like harmonium, flute, tabla, keyboard and various drums. The school has talented teachers who teach vocal and instrumental music. They also conduct individual/group singing competitions among students. ",
    id: 17,
  },
];


function Infrastructure() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
        <div className="bg-gray-100 ">
        <CommonBanner title="Our Infrastructure" />
        {/* Card section */}
        <div className="container mx-auto py-10">
          <div className=" grid content-start  grid-cols-1 md:grid-cols-2 justify-start self-start items-start  cards row-start-1 col-start">
            {Infradetail.map((title) => (
              <div
                className="drop-shadow-lg m-5 rounded-t-md shadow-blue-500/20 bg-white "
                key={title.id}
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                {title.image ? (
                  <img
                    src={title.image}
               
                    alt="Infra"
                 
                    className="w-full h-full rounded-t-md"
                  />
                ) : (
                  <iframe
                    // width="600"
                    // height="310"
                    className=" w-full h-[250px] sm:h-[400px] border rounded-t-md"
                    src="https://www.youtube.com/embed/hcFsDAwmO9A"
                    title="YouTube video player"
                    allow="accelerometer;
                    autoplay; clipboard-write; encrypted-media;
                     gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}

                <div className="p-5">
                  <h3 className="text-blue-900 text-lg font-semibold">
                    {title.title}
                  </h3>
                  <p className="text-gray-500">{title.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infrastructure