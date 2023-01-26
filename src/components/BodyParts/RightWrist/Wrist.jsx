import React from "react";
import ScarVariation2 from "../../Scar1/ScarVariation2";
import NotPerformed from "../../Not-perfomed/NotPerformed";
import RadioButton from "../../RadioButton/RadioButton";
import Reset1 from "../../Reset1/Reset1";
import Findings from "../../Findings/Findings";
import CheckBox from "../../CheckboxButton/CheckBox";
import Others from "../../Others/Others";
import YesNo from "../../YesNo/YesNo";
// import Decreased from "../../Decreased/Decreased";
import Strength from "../../strength/Strength";
import PainScaleButton from "../../PainScaleButton/PainScaleButton";
function Wrist({
  scar,
  scarreset,
  aspect,
  aspectother,
  aspectreset,
  appearance,
  appearancereset,
  appearanceother,
  status,
  statusother,
  statusreset,
  exam,
  nexam,
  nexampainscale,
  other3,
  reason1,
  exam1reset1,
  examreset1,
  notperform1,
  nexamreset,
  fyesother,
  ecchymosis1,
  deformity1,
  edema1,
  redness1,
  effusion1,
  erythema1,
  swelling1,
  fnoother,
  ecchymosis,
  deformity,
  edema,
  redness,
  effusion,
  erythema,
  fno,
  fyes,
  swelling,
  tenderness,
  tendernessreset,
  tstatus,
  tstatusother,
  tstatusreset,
  tpositionreset,
  tposition,
  tpositionother,
  taspect,
  taspectother,
  taspectreset,
  rom,
  exam1reset,
  examreset,
  other2,
  notperform,
  reason,
  romself,
  rompain,
  rompainreset,
  romselfreset,
  symptom,
  symptom1,
  symptomreset,
  suboptimal,
  suboptimal01,
  suboptimal1,
  suboptimal11,
  suboptimalreset,
  suboptimalreset1,
  orthopedic,
  other4,
  notperform2,
  reason2,
  exam1reset2,
  examreset2,
  notperform3,
  exam1reset3,
  examreset3,
  reason3,
  other5,
  negativepositive01,
  negativepositive02,
  examreset4,
  exam1reset4,
  reason4,
  other6,
  notperform4,
  negativepositive03,
  examreset5,
  exam1reset5,
  reason5,
  other7,
  notperform5,
  negativepositive04,
  examreset6,
  exam1reset6,
  reason6,
  other8,
  notperform6,
  negativepositive05,
  examreset7,
  exam1reset7,
  reason7,
  other9,
  notperform7,
  decreasedbutton,
  strength,
  other10,
  decreasedreset,
  other11,
  reason8,
  notperform8,
  examreset8,
  exam1reset8,
  decreasedbutton1,
  strength1,
  other12,
  decreasedreset1,
  other13,
  reason9,
  notperform9,
  examreset9,
  exam1reset9,
  adddetails,
  adddetails1,
  adddetailsreset,
  suboptimaleffort,
  suboptimaleffort1,
  suboptimaleffortreset,
  atrophy,
  atrophy1,
  atrophyreset,
  pagelabel,
}) {
  return (
    <div>
      {pagelabel.map((value) => (
        <h1 style={{ fontSize: "32px", marginLeft: "0" }}>{value.name}</h1>
      ))}
      <ScarVariation2
        scar={scar}
        scarreset={scarreset}
        aspect={aspect}
        aspectother={aspectother}
        aspectreset={aspectreset}
        appearance={appearance}
        appearanceother={appearanceother}
        appearancereset={appearancereset}
        status={status}
        statusother={statusother}
        statusreset={statusreset}
      />
      <h2>Examination</h2>
      <RadioButton inputarray={exam} />
      <NotPerformed
        examreset={examreset1}
        other2={other3}
        reason={reason1}
        exam1reset={exam1reset1}
        notperform={notperform1}
      />

      <h3 style={{ marginLeft: "15px" }}>Normal Exam</h3>
      <div style={{ marginLeft: "25px" }}>
        <RadioButton inputarray={nexam} />
        <PainScaleButton painscale={nexampainscale} />
        <Reset1 resetall={nexamreset} />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Findings</h4>
      <div style={{ marginLeft: "30px" }}>
        <Findings
          fyesother={fyesother}
          ecchymosis1={ecchymosis1}
          deformity1={deformity1}
          edema1={edema1}
          redness1={redness1}
          effusion1={effusion1}
          erythema1={erythema1}
          swelling1={swelling1}
          fnoother={fnoother}
          ecchymosis={ecchymosis}
          deformity={deformity}
          edema={edema}
          redness={redness}
          effusion={effusion}
          erythema={erythema}
          swelling={swelling}
          fno={fno}
          fyes={fyes}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Tenderness</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={tenderness} />
        <Reset1 resetall={tendernessreset} />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "15px" }}>Classification</h5>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox inputarray1={tstatus} />
          <Others other={tstatusother} />
          <Reset1 resetall={tstatusreset} />
        </div>
        <h5 style={{ marginLeft: "15px" }}>Position</h5>
        <div style={{ display: "flex", marginLeft: "25px" }}>
          <CheckBox inputarray1={tposition} />
          <Others other={tpositionother} />
          <Reset1 resetall={tpositionreset} />
        </div>
        <h5 style={{ marginLeft: "15px" }}>Aspect</h5>
        <div style={{ marginLeft: "25px", display: "flex" }}>
          <CheckBox inputarray1={taspect} />
          <Others other={taspectother} />
          <Reset1 Resetall={taspectreset} />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>ROM</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={rom} />
        <NotPerformed
          notperform={notperform}
          exam1reset={exam1reset}
          examreset={examreset}
          reason={reason}
          other2={other2}
        />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "15px" }}>Values</h5>
        <div style={{ display: "flex", marginLeft: "35px" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Dorsiflexion(70)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Volar Flexion(80)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Ulnar-Deviation(30)</h5>
            <input type="text" className="size" />
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "35px" }}>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Radial Deviation(20)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Pronation(90)</h5>
            <input type="text" className="size" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <h5 style={{ marginLeft: "25px" }}>Supination(90)</h5>
            <input type="text" className="size" />
          </div>
        </div>
        <h5 style={{ marginLeft: "25px" }}>Self Restricted</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={romself} />
          <Reset1 resetall={romselfreset} />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Pain causing Motion</h5>
        <div style={{ marginLeft: "35px" }}>
          <CheckBox inputarray1={rompain} />
          <Reset1 resetall={rompainreset} />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>Instability</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={suboptimal}
          suboptimal1={suboptimal1}
          suboptimalreset={suboptimalreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Poor Effort</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={suboptimal01}
          suboptimal1={suboptimal11}
          suboptimalreset={suboptimalreset1}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Suboptimal Effort</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={suboptimaleffort}
          suboptimal1={suboptimaleffort1}
          suboptimalreset={suboptimaleffortreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Atrophy</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={atrophy}
          suboptimal1={atrophy1}
          suboptimalreset={atrophyreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}>Symptom Magnification</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={symptom}
          suboptimal1={symptom1}
          suboptimalreset={symptomreset}
        />
      </div>
      <h4 style={{ marginLeft: "25px" }}> Orthopedic Tests</h4>
      <div style={{ marginLeft: "30px" }}>
        <RadioButton inputarray={orthopedic} />
        <NotPerformed
          examreset={examreset2}
          exam1reset={exam1reset2}
          notperform={notperform2}
          reason={reason2}
          other2={other4}
        />
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h5 style={{ marginLeft: "25px" }}>Tinel's test</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={negativepositive01} />
          <NotPerformed
            exam1reset={exam1reset3}
            examreset={examreset3}
            notperform={notperform3}
            reason={reason3}
            other2={other5}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Phalen's Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={negativepositive02} />
          <NotPerformed
            exam1reset={exam1reset4}
            examreset={examreset4}
            notperform={notperform4}
            reason={reason4}
            other2={other6}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Finkelstein Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={negativepositive03} />
          <NotPerformed
            exam1reset={exam1reset5}
            examreset={examreset5}
            notperform={notperform5}
            reason={reason5}
            other2={other7}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Watson Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={negativepositive04} />
          <NotPerformed
            exam1reset={exam1reset6}
            examreset={examreset6}
            notperform={notperform6}
            reason={reason6}
            other2={other8}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Shuck Test</h5>
        <div style={{ marginLeft: "35px" }}>
          <RadioButton inputarray={negativepositive05} />
          <NotPerformed
            exam1reset={exam1reset7}
            examreset={examreset7}
            notperform={notperform7}
            reason={reason7}
            other2={other9}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Strength</h5>
        <div style={{ marginLeft: "35px" }}>
          <Strength
            exam1reset7={exam1reset8}
            examreset7={examreset8}
            notperform7={notperform8}
            reason7={reason8}
            other11={other11}
            decreasedreset={decreasedreset}
            strength={strength}
            decreasedbutton={decreasedbutton}
            other9={other10}
          />
        </div>
        <h5 style={{ marginLeft: "25px" }}>Sensation</h5>
        <div style={{ marginLeft: "35px" }}>
          <Strength
            exam1reset7={exam1reset9}
            examreset7={examreset9}
            notperform7={notperform9}
            reason7={reason9}
            other11={other13}
            decreasedreset={decreasedreset1}
            strength={strength1}
            decreasedbutton={decreasedbutton1}
            other9={other12}
          />
        </div>
      </div>
      <h4 style={{ marginLeft: "25px" }}>Add Details</h4>
      <div style={{ marginLeft: "30px" }}>
        <YesNo
          suboptimal={adddetails}
          suboptimal1={adddetails1}
          suboptimalreset={adddetailsreset}
        />
      </div>
    </div>
  );
}
export default Wrist;
