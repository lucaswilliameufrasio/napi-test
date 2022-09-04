#![deny(clippy::all)]
use napi::{bindgen_prelude::Object, Env};

use napi_derive::napi;

#[napi]
pub fn plus_100(input: u32) -> u32 {
  input + 100
}

#[napi]
pub fn get_object(env: Env) -> Object {
  let mut obj = env.create_object().unwrap();
	obj.set("Adventures of Huckleberry Finn".to_string(), "My favorite book.".to_string()).unwrap();
	obj.set("Grimms' Fairy Tales".to_string(), "Masterpiece.".to_string()).unwrap();
	obj.set("Pride and Prejudice".to_string(), "Very enjoyable.".to_string()).unwrap();
	obj.set("The Adventures of Sherlock Holmes".to_string(), "Eye lyked it alot.".to_string()).unwrap();
	obj.set("Test".to_string(), 10).unwrap();
  obj
}
