import {useForm} from 'react-hook-form';
import axios from 'axios';

function User() {

    const {register,handleSubmit,formState : {errors} }= useForm()
    const submitForm=async (userData)=>{
        const res= await axios.post("http://localhost:5000/predict",userData);
        console.log(res.data)
    }

  return (
    <div>
       <div className='container'>
        <h2 className='text-center m-4'>Student Dropout Survey</h2>
        <form className='col-10 col-sm-8 col-md-6 form mx-auto border border-dark p-4' onSubmit={handleSubmit(submitForm)}>
            <div>
            <div className='mb-4'>
            <label htmlFor='mail' className='mb-2'>Email:</label>
            <input type='email' className="form-control" id='mail' {...register("mail",{required:true})}></input>
            {errors.mail?.type==='required' && <p className='text-danger'>* Email Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Select your board during 10th class:</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='state' {...register("board",{required:true})} value="state" />
                <label htmlFor='state' className='form-check-label'>State Board</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='cbse' {...register("board",{required:true})} value="cbse" />
                <label htmlFor='cbse' className='form-check-label'>CBSE</label>
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='icse' {...register("board",{required:true})} value="icse" />
                <label htmlFor='icse' className='form-check-label'>ICSE</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
            <label htmlFor='tenth' className='mb-2'>Enter your 10th marks (Convert it into percentage):</label>
            <textarea rows='1' className="form-control" id='tenth' {...register("tenth",{required:true})} />
            {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Which type of school did you study during your secondary education:</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='govt' {...register("school",{required:true})} value="govt" />
                <label htmlFor='govt' className='form-check-label'>Government</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='private' {...register("school",{required:true})} value="private" />
                <label htmlFor='private' className='form-check-label'>Private</label>
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='semi' {...register("school",{required:true})} value="semi" />
                <label htmlFor='semi' className='form-check-label'>Semi-Private</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
            <label htmlFor='inter' className='mb-2'>Enter your Inter Marks (Convert it into percentage):</label>
            <textarea rows='1' className="form-control" id='inter' {...register("inter",{required:true})} />
            {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Select your entry to present Institution:</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='eamcet' {...register("entry",{required:true})} value="eamcet" />
                <label htmlFor='eamcet' className='form-check-label'>Eamcet</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='ecet' {...register("entry",{required:true})} value="ecet" />
                <label htmlFor='ecet' className='form-check-label'>Ecet</label>
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='jee' {...register("entry",{required:true})} value="jee" />
                <label htmlFor='jee' className='form-check-label'>JEE Mains</label>
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='management' {...register("entry",{required:true})} value="management" />
                <label htmlFor='management' className='form-check-label'>Management</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Are you again preparing for any competitive exam:</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("competitive",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("competitive",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
            <label htmlFor='sem' className='mb-2'>Which semester are you in :</label>
            <textarea rows='1' className="form-control" id='sem' {...register("sem",{required:true})} />
            {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
            <label htmlFor='attendance' className='mb-2'>How many times your attendance was below 75% :</label>
            <textarea rows='1' className="form-control" id='attendance' {...register("attendance",{required:true})} />
            {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
            <label htmlFor='cgpa' className='mb-2'>Enter you GPA/CGPA (Cummulative Result Only):</label>
            <textarea rows='1' className="form-control" id='cgpa' {...register("cgpa",{required:true})} />
            {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Are you willing to continue your studies:</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("willingtocontinue",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("willingtocontinue",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Are you interested or forced to study this course?</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='interested' {...register("interest",{required:true})} value="interested" />
                <label htmlFor='interested' className='form-check-label'>Interested</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='forced' {...register("interest",{required:true})} value="forced" />
                <label htmlFor='forced' className='form-check-label'>Forced</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Do you want to get into any other career field ?</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("othercareer",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("othercareer",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Is your financial status effecting your studies?</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("financialstatus",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("financialstatus",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Is your family supporting your studies?</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("family",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("family",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Do you have any personal issues?</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("personalissues",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("personalissues",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Do you have any severe addictions?</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("addictions",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("addictions",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-4'>
                <label className="mb-2">Did  you ever face any severe bullying?</label><br />
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='yes' {...register("bullying",{required:true})} value="yes" />
                <label htmlFor='yes' className='form-check-label'>Yes</label><br />
                </div>
                <div className='form-check mb-2'>
                <input type='radio' className='form-check-input' id='no' {...register("bullying",{required:true})} value="no" />
                <label htmlFor='no' className='form-check-label'>No</label>
                </div>
                {errors.address?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            </div><hr />
            <div>
              <label className='h3 mt-3 mb-5'>Sentimental Analysis</label>
              <div className='mb-5'>
                <label className="mb-2">I don't really enjoy large gatherings and parties.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("a",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("a",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("a",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("a",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("a",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I don't make friends easily.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("b",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("b",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("b",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("b",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("b",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I often feel sad.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("c",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("c",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("c",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("c",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("c",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I experience deep and varied emotions.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("d",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("d",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("d",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("d",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("d",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I panic easily.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("e",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("e",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("e",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("e",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("e",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I get irritated easily.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("f",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("f",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("f",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("f",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("f",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I sometimes dislike myself.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("g",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("g",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("g",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("g",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("g",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I am afraid to draw attention to myself.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("h",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("h",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("h",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("h",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("h",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I feel that I'm unable to deal with things sometimes.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("i",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("i",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("i",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("i",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("i",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            <div className='mb-5'>
                <label className="mb-2">I get stressed out easily.</label><br />
                <div>
                <label>Strongly Disagree</label>
                <span className='mx-4'>
                <input type='radio' className='form-check-input mx-2' id='1' {...register("j",{required:true})} value="1" />
                <label htmlFor='1' className='form-check-label mx-2'>1</label>
                <input type='radio' className='form-check-input' id='2' {...register("j",{required:true})} value="2" />
                <label htmlFor='2' className='form-check-label mx-2'>2</label>
                <input type='radio' className='form-check-input' id='3' {...register("j",{required:true})} value="3" />
                <label htmlFor='3' className='form-check-label mx-2'>3</label>
                <input type='radio' className='form-check-input' id='4' {...register("j",{required:true})} value="4" />
                <label htmlFor='4' className='form-check-label mx-2'>4</label>
                <input type='radio' className='form-check-input' id='5' {...register("j",{required:true})} value="5" />
                <label htmlFor='5' className='form-check-label mx-2'>5</label>
                </span>
                <label>Strongly Agree</label>
                </div>
                {errors.gender?.type==='required' && <p className='text-danger'>*Required</p>}
            </div>
            </div>
            <button type='submit' className='btn btn-success w-100 mt-3'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default User